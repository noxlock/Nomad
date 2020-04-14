require('dotenv').config()
const express = require('express');
const path = require('path')


const app = express()
const port = process.env.PORT || 7000


const rootRouter = require('./routes/root.js')
app.use(rootRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'))

    app.get('*', (req, res) => {
        res.sendFile('../client/build/index.html')
    })
}

app.listen(port, () => {
    console.log(`listening on https://127.0.0.1:${port}`)
})

