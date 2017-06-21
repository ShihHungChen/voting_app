'use strict'

var express = require('express');
var routes = require('./app/routes/routes.js');

var app = express();

routes(app);

app.listen(3000, function(){
	console.log('Listening on port 3000...');
});