var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var tutorialSchema = new Schema({
    title: String,
    postedBy: User,
    dateCreated: Date,
    lesson: String,
    lessonImg: Image,
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
    timestamps: true,
});

module.exports = mongoose.model('Tutorial', tutorialSchema);
