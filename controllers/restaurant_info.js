var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurant');

router.get('/', function(req,res){
	res.render('restaurant_info');
});

// router.get('/:restaurantName',function(req, res){
//   res.send('List a single post');
// });

module.exports = router;
