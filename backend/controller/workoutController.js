const asyncHandler = require('express-async-handler')
const workout = require('../models/workoutDB.js')
const { isValidObjectId } = require('mongoose')
const { ObjectId } = require('mongodb')

const getWorkout = asyncHandler(async (req, res) => {
    const workoutData = await workout.find({}).sort({ updatedAt: -1 })
    res.json(workoutData)
})

const getOneWorkout = asyncHandler(async (req, res) => {

    const { id } = req.params

    if (!isValidObjectId(id)) {
        throw new Error("Invalid ID")
    }
    const workoutData = await workout.findById(new ObjectId(id));
    if (workoutData) {
        res.json(workoutData)
    }
    else {
        throw new Error("Data not found")
    }
})

const createWorkout = asyncHandler(async (req, res) => {
    const { date, time, title, workouts } = req.body

    if (!date || !time || !title || !workouts) {
        throw new Error("All field is required")
    }

    const NewWorkout = await workout.create({
        date: date,
        time: time,
        title: title,
        workouts: workouts
    })

    res.json(NewWorkout);
})

const deleteWorkout = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new Error("Invalid ID")
    }

    if (isValidObjectId(new ObjectId(id))) {
        await workout.findByIdAndDelete(id);
        res.json('workout Deleted successfully')
    }
    else {
        throw new Error("Facing errors")
    }
})

const updateWorkout = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new Error("Invalid ID provide the correct one")
    }

    const { date, time, title, workouts } = req.body

    if (isValidObjectId(id)) {

        const work = [...workouts]
        console.log(work);
        await workout.findByIdAndUpdate(id, {
            date: date || req.body.date,
            time: time || req.body.time,
            title: title || req.body.title,
            workouts: work || req.body.workouts
        })

        res.json({ message: "updated successfully" })
    } else {
        throw new Error("Could not updated")
    }
})

module.exports = {
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
    getOneWorkout
}