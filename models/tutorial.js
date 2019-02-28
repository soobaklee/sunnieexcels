var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var commentSchema = new Schema({
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: String,
    response: String,
}, {
        timestamps: true,
    })

var stepSchema = new Schema({
    header: String,
    content: String,
    imageUrl: String,
    imageId: String,
}, {
        timestamps: true
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
    comments: [commentSchema],
}, {
        timestamps: true,
    });

module.exports = mongoose.model('Tutorial', tutorialSchema);
