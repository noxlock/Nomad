const express = require('express');
const profileRouter = express.Router()
const { auth, requiresAuth } = require('express-openid-connect')



profileRouter.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.openid.user))
})

module.exports = profileRouter