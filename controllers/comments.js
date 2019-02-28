var Tutorial = require('../models/tutorial');

module.exports = {
    create,
}

function create(req, res) {
    Tutorial.findById(req.params.id, function(err, tutorial) {
        tutorial.comments.push({ postedBy: req.user._id.email, content: req.body.content });
        // tutorial.comments.postedBy = req.user._id;
        tutorial.save(function(err) {
            res.redirect(`/tutorials/${tutorial._id}`);
        });
    });
}
