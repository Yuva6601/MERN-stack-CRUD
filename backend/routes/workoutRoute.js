const express = require('express')
const route = express.Router()
const controller = require('../controller/workoutController.js')

route.get('/getworkout', controller.getWorkout)
route.get('/getsingleworkout/:id', controller.getOneWorkout)
route.post('/createworkout', controller.createWorkout)
route.patch('/updateWorkout/:id', controller.updateWorkout)
route.delete('/deleteworkout/:id', controller.deleteWorkout)

module.exports = route