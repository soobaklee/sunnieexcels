var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./users');
var Tutorial = require('./tutorial');

var feedbackSchema = new Schema({
    isQuestion: boolean,
    postedBy: User,
    postedOn: Tutorial,
    dateCreated: Date,
    comments: String
})

module.exports = mongoose.model('Feedback', feedbackSchema);
