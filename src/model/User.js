const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: string,
        required: true,
        unique: true
    },
    passsword: {
        type: string,
        require: true
    }
})

const User = new mongoose.model('User', userSchema);

module.exports = User;

