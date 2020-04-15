const express = require('express');
const db = require('../db.js')
const rootRouter = express.Router()
const translate = require('../translate.js')
const wordData = require('../definition.js')
const cors = require('cors')


rootRouter.use(cors())



rootRouter.get("/getrandomword", async (req, res) => {
    let {randomWord, values} = await db.getRandomWord()
    console.log(`INSIDE '/' randomword: ${randomWord}, values = ${values}`)
    let translatedWord = await translate(randomWord)
    let pronunciation = await wordData.getPronunciation(translatedWord)
    let definition = await wordData.getDefinition(randomWord)
    let data = {
        randomWord: randomWord,
        translatedWord: translatedWord,
        pronunciation: pronunciation,
        definition: definition,
        values: values
    }
    res.send(JSON.stringify(data))
})

module.exports = rootRouter