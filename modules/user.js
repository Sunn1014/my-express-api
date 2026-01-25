const { name } = require('ejs')
const mongoose = require('mongoose')
const { type } = require('os')

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
    },
    password : {
    },
    firstName : {
        type : String,
    },
    lastName : {
        type : String,
    },
    phoneNo : {
        type: Number,
    }
}, {timeseries : true})

const User = mongoose.model('User', UserSchema)

module.exports = User