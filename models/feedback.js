var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var User = require('./users');
// var Tutorial = require('./tutorial');

var feedbackSchema = new Schema({
    isQuestion: Boolean,
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    postedTo: {
        type: Schema.Types.ObjectId,
        ref: 'Tutorial'
    },
    comments: String
}, {
    timestamps: true,
})

module.exports = mongoose.model('Feedback', feedbackSchema);
