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

	// Validation
	 req.checkBody('restaurantName', 'Restaurant name is required').notEmpty();
	 req.checkBody('location', 'Location is required').notEmpty();
	 req.checkBody('item', 'Item is required').notEmpty();
	 req.checkBody('comment', 'Comment is required').notEmpty();

	 var errors = req.validationErrors();
		if(errors){
			res.render('review',{
				errors:errors
			});
		} else {
			var newReview = new Review({
				restaurantName:restaurantName,
				location:location,
				item:item,
				comment:comment
			});

			Review.createReview(newReview, function(review){
				console.log(newReview);
			});
			req.flash('success_msg', 'Your review has been successfully submitted.');
			res.redirect('/');
		}
});

module.exports = router;
