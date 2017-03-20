var express = require('express');
var router = express.Router();
var Review = require('../models/review');

router.get('/', function(req,res){
	res.render('review');
 });

router.post('/', function(req, res){
	var restaurantName = req.body.restaurantName;
	var location = req.body.location;
	var item = req.body.item;
	var comment = req.body.comment;

	var newReview = new Review({
		restaurantName:restaurantName,
		location:location,
		item:item,
		comment:comment
	});

	Review.createReview(newReview, function(review){
		console.log(newReview);
	});
	
	res.redirect('/');
});

module.exports = router; 