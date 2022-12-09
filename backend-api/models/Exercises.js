const mongoose = require('mongoose')

const exercisesSchema = new mongoose.Schema({
    name: String,
    reps: Number,
    muscle: String,
    tips: String,
    image: String
})

const Exercises = mongoose.model('Exercises', exercisesSchema)
module.exports = Exercises