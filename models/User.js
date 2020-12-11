const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const userschema = new Schema({
    name:{
        type:String
    },
    phone:{
        type:Number
    },
    email:{
        type:String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
})

const User = mongoose.model('User', userschema)
module.exports = User