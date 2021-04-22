const express = require('express');
const cors = require('cors');

const db = require('../db.js');
const translate = require('../translate.js');
const wordData = require('../definition.js');

const rootRouter = express.Router();

rootRouter.use(cors());

rootRouter.get('/getrandomword', async (req, res) => {
	const { randomWord, values } = await db.getRandomWord();
	const translatedWord = await translate(randomWord);
	const pronunciation = await wordData.getPronunciation(translatedWord);
	const definition = await wordData.getDefinition(randomWord);
	const data = {
		randomWord,
		translatedWord,
		pronunciation,
		definition,
		values,
	};
	res.send(JSON.stringify(data));
});

module.exports = rootRouter;
