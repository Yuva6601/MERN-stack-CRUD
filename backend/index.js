require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello hey")
})

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log('App is listening to the port', port);
        })
    })
    .catch((err) => {
        console.log(err);
    })