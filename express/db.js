require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

// FUNCTION TO SEE HIGHEST ID # USABLE
async function countWords() {
	try {
		// AWAIT THE QUERY
		const res = await client.query('SELECT COUNT(word_id) FROM words');
		const maxID = res.rows[0].count;
		return maxID;
	} catch (err) {
		console.log(`ERROR IN countWords FUNCTION, ${err.stack}`);
		return false;
	}
}

// FUNCTION TO GET A RANDOM WORD FROM DATABASE
async function getRandomWord() {
	// SET PARAMETERIZED QUERY
	const text = 'SELECT word FROM words WHERE word_id=$1';
	// GENERATE RANDOM WORD_ID TO GRAB
	const values = [Math.floor(Math.random() * (Math.floor(await countWords()) - Math.ceil(1)) + 1)];

	try {
		// ASYNC AWAIT THE QUERY
		const res = await client.query(text, values);

		return {
			randomWord: res.rows[0].word,
			values: values[0],
		};
	} catch (err) {
		console.error(`ERROR IN getRandomWord: ${err}`);
		return false;
	}
}

module.exports = {
	getRandomWord,
};
