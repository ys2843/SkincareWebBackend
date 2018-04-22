const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('user', userSchema, 'users');