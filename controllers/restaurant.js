var express = require('express');
var router = express.Router();

var Restaurant = require('../models/restaurant');

router.get('/', function(req,res){
	res.render('restaurant');
 });

router.post('/', function(req, res){
	var restaurantName = req.body.restaurantName;
	var location = req.body.location;
	var website = req.body.website;
	var cuisine = req.body.cuisine;
	var item = req.body.item;
	var about = req.body.about;

	// Validation
	 req.checkBody('restaurantName', 'Restaurant name is required').notEmpty();
	 req.checkBody('location', 'Location is required').notEmpty();
	 req.checkBody('cuisine', 'Cuisine is not valid').notEmpty();
	 req.checkBody('item', 'Please enter at least one item').notEmpty();
	 req.checkBody('about', 'Tell us a little bit about your business').notEmpty();

	 var errors = req.validationErrors();
		if(errors){
			res.render('restaurant',{
				errors:errors
			});
		} else {
			var newRestaurant = new Restaurant({
				restaurantName:restaurantName,
				location:location,
				website:website,
				cuisine:cuisine,
				item:item,
				about:about
			});

			Restaurant.createRestaurant(newRestaurant, function(restaurant){
				console.log(newRestaurant);
			});
			req.flash('success_msg', 'Your business has been successfully added to our database.');
			res.redirect('/');
		}
});

module.exports = router;
