require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require('cors')

const errorMiddleware = require('./middleware/errorMidd.js')
const workoutRouter = require('./routes/workoutRoute.js')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello hey")
})

app.use('/api', workoutRouter)

app.use(errorMiddleware)

const port = process.env.PORT;

mongoose.connect('mongodb+srv://yyuvanesh8:yuvanesh@crud-application.l3ir9pi.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-application')
    .then(() => {
        app.listen(port, () => {
            console.log('App is listening to the port', port);
        })
    })
    .catch((err) => {
        console.log(err);
    })