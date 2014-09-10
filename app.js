var express = require('express');
var request = require('request');
var http = require('http');
var https = require('https');
var path = require('path');
var fs = require('fs');
var Handlebars = require('handlebars');
var request = require('request');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'js/views'));


//app.set('view engine', 'jade');lpkljij
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
















var User = require('./models/testModel').User;

app.get('/', function(req, res) {
	var u = new User({email:"test@test.com"}); 
	u.save(function(err, user){
		res.sendfile("index.html"); 
	})
});

app.get('/js/*', function(req, res) {
	console.log("here2 " + __dirname);
	fs.readFile(__dirname + req.url, function(err, html) {
		if (err) {
			throw err;
		}
		else {
			res.writeHeader(200, {
				"Content-Type": "application/javascript"
			});
			res.write(html);
			res.end();
		}
	});
});
app.get('/css/*', function(req, res) {
	console.log("get css " + req.url);
	fs.readFile(__dirname + req.url, function(err, html) {
		if (err) {
			throw err;
		}
		else {
			res.writeHeader(200, {
				"Content-Type": "text/css"
			});
			res.write(html);
			res.end();
		}
	});
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});