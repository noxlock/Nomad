const fetch = require('node-fetch');

async function getPronunciation(germanResult) {
	try {
		let germanWord = germanResult.split(' ');
		germanWord = encodeURI(germanWord[0]);
		let res = await fetch(`https://api.dictionaryapi.dev/api/v1/entries/de/${germanWord}`);
		res = await res.json();
		return res[0].phonetic;
	} catch (err) {
		console.error(`ERROR IN getPronunciation FUNCTION: ${err}`);
		return false;
	}
}

async function getDefinition(englishWord) {
	try {
		let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${englishWord}`);
		res = await res.json();
		return res[0].meanings[0].definitions[0].definition;
	} catch (err) {
		console.error(`ERROR IN getDefinition FUNCTION: ${err} `);
		return false;
	}
}

module.exports = {
	getPronunciation,
	getDefinition,
};
