const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        default: new Date(),
    },
    isMale: {
        type: Boolean,   
    },
    level: {
        type: String,
        enum: ['begginer level', 'middle level', 'super level']
    },
    years: {
        type: Number,
        default: 0
    }
}, 
{
    versionKey: false,
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;