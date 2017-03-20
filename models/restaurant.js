var mongoose = require('mongoose');

// Restaurant Schema
var RestaurantSchema = mongoose.Schema({
    restaurantName: {
      type: String
    },
    location: {
      type:String
    },
    website: {
      type:String
    },
    cuisine: {
      type: String
    },
    item: {
      type:String
    },
    about:{
      type:String
    }

});

var Restaurant = module.exports = mongoose.model('Restaurant', RestaurantSchema);

module.exports.createRestaurant = function(newRestaurant, callback){
  newRestaurant.save(callback);
}