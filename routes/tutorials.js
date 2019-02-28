var express = require('express');
var router = express.Router();
var tutorialsCtrl = require('../controllers/tutorials');

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");


const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const parser = multer({ storage: storage });

/* GET users listing. */
router.get('/', tutorialsCtrl.index);
router.get('/new', isLoggedIn, tutorialsCtrl.new);
router.get('/:id', tutorialsCtrl.show);
router.post('/', isLoggedIn, parser.single('image'), tutorialsCtrl.create);
router.delete('/:id', isLoggedIn, tutorialsCtrl.delete);
router.get('/:id/edit', tutorialsCtrl.update);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())return next();
  res.redirect('/auth/google');
}


module.exports = router;
