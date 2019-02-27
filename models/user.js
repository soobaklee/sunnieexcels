var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    profileName: String,
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Feedback',
        isQuestion: false,
    }],
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Feedback',
        isQuestion: true,
    }],
    googleId: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);