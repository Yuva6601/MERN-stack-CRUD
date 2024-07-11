require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello hey")
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log('App is listening to the port', port);
})