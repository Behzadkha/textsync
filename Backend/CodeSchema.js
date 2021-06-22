const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Code = new Schema({
    code:{
        type: String
    },
    text:{
        type: String
    },
    textReceived:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Code', Code, 'codes',);