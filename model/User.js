const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    // PhoneNumber: {
    //     type: Number,
    //     required: true
    // },
    Adress: {
        type: String,
        required: true
    },
    PassWord: {
        type: String,
        required: true
    },
    // Date: {
    //     type: Date,
    //     default: Date.now
    // },

})

module.exports = mongoose.model('user', UserSchema)