var mongoose = require('mongoose');

// Review Schema
var ReviewSchema = mongoose.Schema({
    restaurantName: {
      type: String
    },
    location: {
      type:String
    },
    item: {
      type:String
    },
    comment:{
      type:String
    }

});

var Review= module.exports = mongoose.model('Review', ReviewSchema);

module.exports.createReview = function(newReview, callback){
  newReview.save(callback);
}