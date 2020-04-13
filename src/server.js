require('dotenv').config()
const express = require('express');
const https = require('https')
const fs = require('fs')
const { auth } = require('express-openid-connect')

const key = fs.readFileSync('./localhost-key.pem')
const cert = fs.readFileSync('./localhost.pem')


const app = express()
const port = 3000


const rootRouter = require('./routes/root.js')
app.use(rootRouter)

const config = {
    required: false,
    auth0Logout: true,
    baseURL: "https://localhost:3000",
    issuerBaseURL: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    appSessionSecret: process.env.APPSESSIONSECRET

}

app.use(auth(config))


app.get("/testauth", (req, res) => {
    res.send(req.isAuthenticated() ? "logged in" : "not logged in")
})




https.createServer({key, cert}, app).listen(port, () => {
    console.log(`listening on https://127.0.0.1:${port}`)
})

