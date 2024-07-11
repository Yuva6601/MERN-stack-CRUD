const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello hey")
})

const port = 5000;

app.listen(port, () => {
    console.log('App is listening to the port', port);
})