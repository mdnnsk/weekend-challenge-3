var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var answer = require('../modules/math.js');

var server = app.listen(process.env.PORT, function(){
  var port = server.address().port;
  console.log( ' server is on port ' + port);
});

app.get ( '/', function( req, res){
  res.sendFile (path.resolve ('./index.html'));
});

app.post('/calculate', urlencodedParser, function( req, res ){
console.log("in app post: " + req.body.x + " " + req.body.y + " " + req.body.operation);
  var fromModule = answer(req.body);
  res.send(fromModule.toString());
});


app.use(express.static('public'));
