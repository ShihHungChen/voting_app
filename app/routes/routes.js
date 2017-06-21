'use strict'

exports = module.exports = function(app){

	app.route('/').get(function(req, res){
		res.sendFile(process.cwd() + '/public/index.html');
	});

	app.route('/signup').get(function(req, res){
		res.end('sign up page');
	});

	app.route('/login').get(function(req, res){
		res.end('login page');
	});
}