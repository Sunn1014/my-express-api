const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
     imgId : String,
     imageName : String,
     name : String,
     image :{
        data : Buffer,
        contentType : String
     }
 }, {timestamps : true})

 const Image = mongoose.model('Image', imageSchema)

 module.exports = Image