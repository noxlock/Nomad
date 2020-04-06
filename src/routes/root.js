const express = require('express');
const db = require('../db.js')
const rootRouter = express.Router()

rootRouter.get("/", async (req, res) => {
    let randomWord = await db.getRandomWord()
    console.log(`inside route: ${randomWord}`)
    res.send(randomWord)
})

module.exports = rootRouter