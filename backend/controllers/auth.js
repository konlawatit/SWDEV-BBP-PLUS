const express = require("express");
const { OAuth2Client } = require("google-auth-library");

const router = express.Router();

const Users = require("../models/users");
const Accounting = require("../models/accounting");

const GOOGLE_CREDENTIALS = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
};

router.post("/revoke", async (req, res) => {
  try {
    // if (!scope.split().includes("https://www.googleapis.com/auth/gmail.readonly"))
    const email = req.body.email;
    Users.findOne(
      {
        email: email
      },
      "access_token",
      (err, user) => {
        const oauth2Client = new OAuth2Client(
          GOOGLE_CREDENTIALS.client_id,
          GOOGLE_CREDENTIALS.client_secret,
          "urn:ietf:wg:oauth:2.0:oob"
        );
        oauth2Client
          .revokeToken(user.access_token)
          .then((d) => {
            console.log("revoke", d);
            res.send({
              error: false,
              message: "revoke success"
            });
          })
          .catch((err) => {
            console.log("revoke err", err);
            res.send({
              error: true,
              message: "revoke error"
            });
          });
      }
    );
  } catch (err) {
    console.log("revoke err", err);
    res.send({
      error: true
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const CLIENT_ID = GOOGLE_CREDENTIALS.client_id;
    console.log(req.body);
    // const id_token = req.body.payloads.id_token;
    const {
      id_token,
      access_token,
      refresh_token,
      scope,
      token_type,
      expiry_date
    } = req.body.payloads;
    const client = new OAuth2Client(CLIENT_ID);

    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: CLIENT_ID // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      Users.findOne(
        {
          email: payload.email
        },
        "access_token refresh_token expiry_date scope",
        (err, userObj) => {
          if (userObj) {
            userObj.access_token = access_token;
            userObj.refresh_token = refresh_token;
            userObj.expiry_date = expiry_date;
            userObj.scope = scope
            return userObj
              .save()
              .then(() => {
                res.send("update user");
              })
              .catch((err) => {
                res.send("update user err");
              });
          } else {
            let user = new Users({
              user_name: payload.name,
              email: payload.email,
              access_token: access_token,
              refresh_token: refresh_token,
              scope: scope,
              token_type: token_type,
              expiry_date: expiry_date
            });
            return user
              .save()
              .then(() => {
                let accounting = new Accounting({
                  user_email: payload.email,
                  ac_list: []
                });
                accounting.save().then(() => {
                  console.log("save user");
                  res.send("save user successful");
                });
              })
              .catch((err) => {
                console.log("err save user", err);
                res.send("signin err");
              });
          }
        }
      );
    }
    verify().catch((e) => {
      console.log(e);
      res.status(400).send({
        statusCode: "400",
        statusText: "Bad Request",
        error: true,
        message: "user invalid"
      });
    });
  } catch (err) {
    console.log("...", err);
    res.status(500).send({
      error: true
    });
  }
});

module.exports = router;
