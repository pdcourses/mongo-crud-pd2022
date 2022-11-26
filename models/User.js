const mongoose = require('mongoose');
const {EMAIL_VS} = require('../utils/validationSchemas.js');

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
        required: true,
        validate: {
            validator: v => EMAIL_VS.isValidSync(v),
        }
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