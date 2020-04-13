const express = require('express');
const db = require('../db.js')
const rootRouter = express.Router()
const testAuthRouter = require('./auth/logstatus.js')
const translate = require('../translate.js')
const wordData = require('../definition.js')



rootRouter.use(testAuthRouter)




rootRouter.get("/", async (req, res) => {
    let randomWord = await db.getRandomWord()
    let translatedWord = await translate(randomWord)
    let pronunciation = await wordData.getPronunciation(translatedWord)
    let definition = await wordData.getDefinition(randomWord)
    console.log(`inside route: ${randomWord}, ${translatedWord}, ${pronunciation}`)
    res.send(` <p> Pronunciation: ${pronunciation} </p>
            <h1> German Word: ${translatedWord} <h1>
            <h2> Translated to English: ${randomWord} <h2>
            <h3> Definition: ${definition}

    `)
})

module.exports = rootRouter