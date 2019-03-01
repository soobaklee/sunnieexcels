var Tutorial = require('../models/tutorial');

module.exports = {
    create,
    // delete: deleteComment,
}

function create(req, res) {
    Tutorial.findById(req.params.id, function (err, tutorial) {
        tutorial.comments.push({ postedBy: req.user, content: req.body.content });
        tutorial.save(function (err) {
            res.redirect(`/tutorials/${tutorial._id}`);
        });
    });
}

// function deleteComment(req, res) {
//     Tutorial.comments.findByIdAndRemove(req.params.id, function (err) {
//         res.redirect(`/tutorials/${tutorial._id}`);
//     });
// }

// function deleteComment(req, res) {
//     Tutorial.findByIdAndUpdate(req.params.id, {
//         $pull: { comments: {comment: comments._id } }}, function (err) {
//             res.redirect(`/tutorials/${tutorial._id}`);
//         });
// }