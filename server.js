require('dotenv').config()
const express = require('express');
const path = require('path')
const cors = require('cors')


const app = express()
app.use(cors())
const port = process.env.PORT || 7000


const rootRouter = require('./express/routes/root.js')
app.use(rootRouter)

console.log(`NODE_ENV = ${process.env.NODE_ENV}`)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
console.log(`PATH = ${path.join(__dirname, 'client', 'build', 'index.html')}`)

app.listen(port, () => {
    console.log(`listening on https://127.0.0.1:${port}`)
})

