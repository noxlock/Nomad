require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool()

// FUNCTION TO SEE HIGHEST ID # USABLE
async function countWords() {
        try {
            // AWAIT THE QUERY
            let res = await pool.query('SELECT COUNT(word_id) FROM words') 
            let maxID = res.rows[0].count
            return maxID
        } catch(err) {
            console.log(`ERROR IN countWords FUNCTION, ${err.stack}`)
        }
    
}

// FUNCTION TO GET A RANDOM WORD FROM DATABASE
async function getRandomWord() {
    // SET PARAMETERIZED QUERY
    let text = `SELECT word FROM words WHERE word_id=$1`
    // GENERATE RANDOM WORD_ID TO GRAB 
    let values = [Math.floor(Math.random() * (Math.floor(await countWords()) - Math.ceil(1)) + 1)]

    try {
        // ASYNC AWAIT THE QUERY
        let res = await pool.query(text, values)
        console.log(`INSIDE DB.JS randomword = ${res.rows[0].word} values=${values}`)
        return {
            randomWord: res.rows[0].word,
            values: values
        }
    } catch(err) {
        console.error(`ERROR IN getRandomWord: ${err}`)
    }
    
}



module.exports = {
    getRandomWord: getRandomWord
}