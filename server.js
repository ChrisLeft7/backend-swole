const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const cors = require('cors')
const app = express()
const Exercises = require('./models/Exercises.js')
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT

require('dotenv').config()


app.post('/workout', (req, res) => {
    Exercises.create(req.body, (err, createdExercise) => {
        res.json(createdExercise)
    })
})

app.get('/workout', (req, res) => {
    Exercises.find({}, (err, foundExercise) => {
        res.json(foundExercise)
    })
})

app.delete('/workout/:id', (req, res) => {
    Exercises.findByIdAndRemove(req.params.id, (err, deletedExercise) => {
        res.json(deletedExercise)
    })
})

app.put('/workout/:id', (req, res) => {
    Exercises.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedExercise) => {
        res.json(updatedExercise)
    })
})







app.listen(PORT, () => {
    console.log('we live')
})

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});