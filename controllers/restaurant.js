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
	
	// console.log(user);
	res.redirect('/');
});

module.exports = router; 