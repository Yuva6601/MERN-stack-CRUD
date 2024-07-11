const mongoose = require('mongoose')

const work = mongoose.Schema({
    workout: {
        type: String,
        required: true
    },
    sets: {
        type: String,
        required: true
    },
    reps: {
        type: String,
        required: true
    }
})

const workoutSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        workouts: {
            type: Array,
            required: true,
            default: [work]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Workout", workoutSchema)