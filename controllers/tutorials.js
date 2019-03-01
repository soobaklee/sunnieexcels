const Tutorial = require('../models/tutorial');
const User = require('../models/user');

module.exports = {
    index,
    new: newTutorial,
    show,
    create,
    mastered,
    edit,
    delete: deleteTutorial,
    update: updateTutorial,
}

function index(req, res, next) {
    Tutorial.find({}).populate('postedBy').populate('comments.postedBy').exec(function (err, tutorials) {
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
        .populate('postedBy').populate('comments.postedBy')
        .exec(function (err, tutorial) {
            res.render('tutorials/show', {
                title: `${tutorial.title}`,
                postedBy: tutorial.postedBy,
                user: req.user,
                tutorial
            });
        });

}

function create(req, res) {
    var tutorial = new Tutorial(req.body);
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;
    tutorial.steps.push({ content: req.body.content, imageUrl: image.url, imageId: image.id });
    tutorial.postedBy = req.user._id;
    tutorial.save(function (err) {
        if (err) return res.redirect('/tutorials/new');
        res.redirect(`/tutorials/${tutorial._id}`);
    });
}


function mastered(req, res) {
    req.body.field = Boolean(req.body.field)
}

function deleteTutorial(req, res) {
    Tutorial.findByIdAndRemove(req.params.id, function (err) {
        res.redirect('/tutorials');
    });
}

function edit(req, res) {
    Tutorial.findById(req.params.id)
        .populate('postedBy')
        .exec(function (err, tutorial) {
            console.log(tutorial)
            res.render('tutorials/edit', {
                title: `${tutorial.title}`,
                postedBy: tutorial.postedBy,
                user: req.user,
                tutorial,
            });
        });

}


function updateTutorial(req, res) {
    Tutorial.findByIdAndUpdate(req.params.id, {
        content: req.body.content,
        image: req.body.image,
        title: req.body.title
    }, { new: true }, function (err, tutorial) {
        res.render(`tutorials/edit`, {
            title: `${tutorial.title}`,
            postedBy: tutorial.postedBy,
            user: req.user,
            tutorial
        });
    });
}

