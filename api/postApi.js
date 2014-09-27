//post api
// get all posts
	app.get('/api/posts', function(req, res) {

		// use mongoose to get all todos in the database
		Post.find(function(err, posts) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(posts); // return all todos in JSON format
		});
	});

	// create todo and send back all todos after creation
	app.post('/api/posts', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Post.create({
			text : req.body.text,
			done : false
		}, function(err, post) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Post.find(function(err, posts) {
				if (err)
					res.send(err)
				res.json(posts);
			});
		});

	});

	// delete a todo
	app.delete('/api/posts/:post_id', function(req, res) {
		Todo.remove({
			_id : req.params.post_id
		}, function(err, post) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, posts) {
				if (err)
					res.send(err)
				res.json(posts);
			});
		});
	});
