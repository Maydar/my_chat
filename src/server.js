var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('hello world');
})

var server = app.listen(PORT, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('app listening at http://%s:%s', host, port);	
})



