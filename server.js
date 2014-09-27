 // server.js

	// kirjastot
	var express  = require('express');
	var app      = express(); 								// create our app w/ express
	var mongoose = require('mongoose'); 					// mongoose for mongodb
	var morgan = require('morgan'); 			// log requests to the console (express4)
	var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
	var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
	var unorm = require('unorm');

	// konfiguraatio

	//mongoose.connect('mongodb://localhost:27017/kanta'); 	// connect to mongoDB database on modulus.io

	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended':'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
	app.use(methodOverride());



/*	var Model = mongoose.model('Post', {
		User : String,
		Text : String,
		Date : Date,
		ResourceId : String,
		ParentId : String,
		InUse : Boolean
	});*/

	app.get('/api/restaurants/:lng/:lat', function(req, res) {

		var lng = req.params.lng;
		var lat = req.params.lat;

		
		console.log('long: ' + lng + " lat: " + lat);
		//jj

		//res.json(stuff);
	}); 

/*	app.post('/api/resource', function(req, res) {
		
		var title = req.body.title.trim().toLowerCase();
		console.log(title);
		var asciifier =  /[\u0300-\u036F]/g; 
		var url = title.normalize('NFKD').replace(asciifier,'').replace(' ', '_');
		console.log(url);

		Resource.create({
			Url : url,
			User : req.body.user,
			Date : req.body.date,
			Title : req.body.title,
			done : false
		}, function(err, post) {
			if (err)
				res.send(err);
			Resource.find(function(err, posts) {
				if (err)
					res.send(err)
				res.json(posts);
			});
		});

	});*/


 	// Tää on getti meidän sivulle
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.listen(8080);
	console.log("Päällä - portti: 8080");
