const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    creator:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'Users'
        
    },
    image:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Place',placeSchema);