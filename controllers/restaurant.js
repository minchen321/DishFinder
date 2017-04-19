var express = require('express');
var router = express.Router();
var getSlug = require('speakingurl');
var Restaurant = require('../models/restaurant');

router.get('/', function(req,res){
	res.render('restaurant');
 });

router.post('/', function(req, res){
	var restaurantName = req.body.restaurantName;
	var location = req.body.location;
	var phone = req.body.phone;
	var website = req.body.website;
	var cuisine = req.body.cuisine;
	var item = req.body.item;
	var about = req.body.about;
	var slug = getSlug(req.body.restaurantName.toLowerCase());
	// Validation
	 req.checkBody('restaurantName', 'Restaurant name is required').notEmpty();
	 req.checkBody('location', 'Location is required').notEmpty();
	 req.checkBody('phone', 'Phone is required').notEmpty();
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
				phone:phone,
				website:website,
				cuisine:cuisine,
				item:item,
				about:about,
				slug:slug
			});

			Restaurant.createRestaurant(newRestaurant, function(restaurant){
				console.log(newRestaurant);
			});
			req.flash('success_msg', 'Your business has been successfully added to our database.');
			res.redirect('/');
		}
});
router.get('/:slug', function(req,res){
	var currentSlug = req.params.slug;
	Restaurant.findOne({slug: currentSlug}, function(err, this_restaurant){
				if(err){
					console.log(err);
				}
				else{
					res.render('restaurant_info', {restaurant:this_restaurant});
				}
	});
});

module.exports = router;
