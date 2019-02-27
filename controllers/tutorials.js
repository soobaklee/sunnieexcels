const Tutorial = require('../models/tutorial');
const Feedback = require('../models/feedback');
const User = require('../models/user');

module.exports = {
    index,
    new: newTutorial,
    show,
    create,
    mastered,
}

function index(req, res, next) {
    Tutorial.find({}, function (err, tutorials) {
        res.render('tutorials/index', {
            title: 'Learn to Excel',
            user: req.user,
            tutorials
        });
    });
}

function newTutorial(req, res) {
    res.render('tutorials/new', {
        title: 'Make a New Tutorial',
        user: req.user
    });
}

function show(req, res) {
    Tutorial.findById(req.params.id)
        .populate('postedBy')
        .populate('feedback').exec(function (err, tutorial) {
            Feedback.find({ _id: { $nin: tutorial.comments, $nin: tutorial.questions } })
                .exec(function (err, feedback) {
                    res.render('tutorials/show', {
                        title: `${tutorial.title}`,
                        postedBy: tutorial.postedBy,
                        user: req.user,
                        tutorial,
                        feedback
                    });
                });
        });
}

function create(req, res) {
    console.log("Req inside of tutorial create", req.body)
    var tutorial = new Tutorial(req.body);
    tutorial.steps.push({ content: req.body.content, image: req.body.image });
    console.log("POSTEDBY: ", tutorial)
    tutorial.postedBy = req.user._id;
    tutorial.save(function (err) {
        if (err) return res.redirect('/tutorials/new');
        res.redirect(`/tutorials/${tutorial._id}`);
    });
}


function mastered(req, res) {
    req.body.field = Boolean(req.body.field)
}
