var express = require('express');
var router = express.Router();

// Get homepage
router.get('/', function(req, res){
	res.render('home');
});

//Get subpages
router.use('/review', require('./review'));
router.use('/restaurant', require('./restaurant'));
router.use('/result', require('./result'));



module.exports = router;
