const { name } = require('ejs')
const mongoose = require('mongoose')
const { type } = require('os')

const UserSchema = new mongoose.Schema({
    IdStr: {
        type : String,
    },

}, {timeseries : true})

const User = mongoose.model('User', UserSchema)

module.exports = User