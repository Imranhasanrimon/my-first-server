const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('hello my first ever server')
})

app.listen(port, () => {
    console.log(`my first server is runnit on port: ${port}`);
})