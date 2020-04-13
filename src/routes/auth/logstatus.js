const express = require('express');
const testAuthRouter = express.Router()
const { auth, requiresAuth } = require('express-openid-connect')




testAuthRouter.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.openid.user))
})

module.exports = testAuthRouter