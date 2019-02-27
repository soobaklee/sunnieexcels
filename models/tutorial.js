var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');
var Feedback = require('./feedback');

var stepSchema = new Schema({
    header: String,
    content: String,
    image: String
})

var tutorialSchema = new Schema({
    title: String,
    mastered: {
        type: Boolean,
        default: false,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    steps: [stepSchema],
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
