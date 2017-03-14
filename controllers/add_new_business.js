var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.render('add_new_business');
 });

module.exports = router; 