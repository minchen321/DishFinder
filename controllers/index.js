var express = require('express');
var router = express.Router();

// Get homepage
router.get('/', function(req, res){
	res.render('home');
});

//Get subpages
router.use('/giveareview', require('./give_a_review'));
router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/restaurant', require('./restaurant'));


module.exports = router;
