var Tutorial = require('../models/tutorial');

module.exports = {
    create
}

function create(req, res) {
    Tutorial.findById(req.params.id, function(err, tutorial) {
        tutorial.steps.push(req.body);
        tutorial.save(function(err) {
            res.redirect(`/tutorials/${tutorial._id}`);
        });
    });
}