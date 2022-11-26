const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minLength: 1,
    },
    body: {
        type: String,
        require: true,
        minLength: 1,
    },
    userId: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
}, 
{
    versionKey: false,
    timestamps: true
}
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;