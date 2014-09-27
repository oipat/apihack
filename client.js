define("client", [], function() {


	var Client = require('node-rest-client').Client;

	client = new Client();

	client.get('http://www.lolnas.fi/api/restaurants.json', 'GET', function (data, response) {
	console.log(data);
	console.log(response);
});
});

