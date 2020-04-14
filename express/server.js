require('dotenv').config()
const express = require('express');


const app = express()
const port = process.env.PORT || 7000


const rootRouter = require('./routes/root.js')
app.use(rootRouter)


app.listen(port, () => {
    console.log(`listening on https://127.0.0.1:${port}`)
})

