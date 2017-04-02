var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurant');

router.get('/', function(req,res){
	// res.render('result');
	if(req.query.search){
		const regex = new RegExp(escapeRegex(req.query.search), 'gi');
		Restaurant.find({"restaurantName":regex},function(err, allRestaurants){
			if(err){
				console.log(err);
			}else{
				res.render('result',{restaurants:allRestaurants});
			}
		});
	}
 });

function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
