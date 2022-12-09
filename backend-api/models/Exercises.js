const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    name: String,
    reps: Number,
    muscle: String,
    tips: String,
    image: String
})

const Exercises = mongoose.model('Exercises', workoutSchema)
module.exports = Exercises