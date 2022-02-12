const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config();

const PORT = 3030

const app = express()

const database = "bbp"
const mongodbUri = `mongodb+srv://bbp:bbp6751@cluster0.5jryn.mongodb.net/${database}?retryWrites=true&w=majority`

const gmailAPI = require("./controllers/gmailAPI")
const accounting = require("./controllers/accounting")
const auth = require("./controllers/auth")

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

const routes = [
    {
        prefix: '/auth',
        target: auth
    },
    {
        prefix: '/gmailapi',
        target: gmailAPI
    },
    {
        prefix: '/accounting',
        target: accounting
    }
]

for (let route of routes) {
    app.use(route.prefix, route.target)
}

mongoose.connect(mongodbUri).then(result => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
}).catch(err => {
    console.log("Database err", err)
})

