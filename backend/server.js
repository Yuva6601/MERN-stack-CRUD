const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`Hey there`)
})

const port = 5000

app.listen(port, () => {
    console.log(`working`);
})