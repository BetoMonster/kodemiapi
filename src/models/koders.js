
const mongoose =require ('mongoose')

//schema 
const koderSchema = new mongoose.Schema({ 
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
    }

})

//model
const model = mongoose.model('koders', koderSchema) 

module.exports = model
