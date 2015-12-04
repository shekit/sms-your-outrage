var express = require('express');
var router = express.Router();
var Subscriber = require("../models/subscriber");


/* GET home page. */
router.post('/message', function(req, res, next){

	// get users number
	var phone = req.body.From;
	var msg = req.body.Body || '';

	//msg = msg.toLowerCase().trim();


	console.log("Phone: " + phone);
	console.log("Message: " + msg);

	res.type('text/xml');
	res.render('twiml');
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
