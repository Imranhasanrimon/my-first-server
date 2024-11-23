const express = require('express')
const app = express()
const cors = require('cors')
const phones = require('./phones.json')
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello my first ever server')
})

app.get('/data', (req, res) => {
    res.send('this is my second serverrrrrrrrrrrrrrrrr')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
    console.log('i need data for id:', id);
})

app.listen(port, () => {
    console.log(`my first server is running on port: ${port}`);
})