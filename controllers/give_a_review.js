var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.render('give_a_review');
 });

module.exports = router; 