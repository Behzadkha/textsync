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
    },
    createdAt: {type: Date, default: Date.now}

})
Code.index({ createdAt: 1}, {expireAfterSeconds: 1200})
module.exports = mongoose.model('Code', Code, 'codes',);