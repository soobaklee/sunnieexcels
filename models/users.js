var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNo: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Feedback',
        isQuestion: false,
    }],
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Feedback',
        isQuestion: true,
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);