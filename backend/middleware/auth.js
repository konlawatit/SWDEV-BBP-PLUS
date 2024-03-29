const jwt = require("jsonwebtoken")
const secure_key = process.env.SECURE_KEY;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) return res.status(403).send("token is required")

    try {
        const decoded = jwt.verify(token, secure_key)
        req.user = decoded
    } catch(err) {
        return res.status(401).send("invalid token");
    }

    return next();
}

module.exports = {
    verifyToken
};