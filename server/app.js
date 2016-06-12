var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-parser');

var server = app.listen (8000, 'localhost', function(){
  var port = server.address().port;
  console.log( ' server is on ' + port);
});

app.get ( '/', function( req, res){
  res.sendFile (path.resolve ('./index.html'));
});

app.use(express.static('public'));
