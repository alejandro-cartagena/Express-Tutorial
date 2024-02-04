const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send(`<h1>Home</h1>`)
})

app.get('/about', (req, res) => {
    res.send(`<h1>About</h1>`)
})



app.listen(5000, () => {
    console.log("Server running on port 5000...")
})