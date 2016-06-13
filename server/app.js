var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var math = require("../modules/math.js");

var server = app.listen (8000, 'localhost', function(){
  var port = server.address().port;
  console.log( ' server is on ' + port);
});

app.get ( '/', function( req, res){
  res.sendFile (path.resolve ('./index.html'));
});

app.post('/math', urlencodedParser, function( req, res ){
 res.write( math(req.body) );
 res.end();
});


app.use(express.static('public'));
