var mongoose = require('mongoose');

// Restaurant Schema
var RestaurantSchema = mongoose.Schema({
    restaurantName: {
      type: String
    },
    location: {
      type:String
    },
    phone:{
      type:String
    },
    website: {
      type:String
    },
    cuisine: {
      type: String
    },
    items: [{
      item:String,
      category: String
    }],
    // img: { 
    //   data: Buffer, 
    // },
    about:{
      type:String
    },
    slug:{
      type:String
    }

});

var Restaurant = module.exports = mongoose.model('Restaurant', RestaurantSchema);

module.exports.createRestaurant = function(newRestaurant, callback){
  newRestaurant.save(callback);
}
