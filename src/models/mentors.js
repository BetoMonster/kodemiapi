
const mongoose = require ('mongoose')

const mentorSchema = new mongoose.Schema({ 
    name: {
        type: String,
        minLength: 2,
        maxLenght: 100,
        required: true 
    },
    lastname:{
        type: String,
        minLength: 2,
        maxLenght: 100,
        required: true 
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        required: true 
    },
    gender: {
        type: String,
        enum: ['m', 'f'],
        required: true 
    },
    modulo: {
        type: String,
        enum: [ 'front', 'back', 'cloud', 'react' ],
        required: true 
    }

})

const model = mongoose.model('mentors', mentorSchema) 

module.exports = model
