var express = require('express');
var app = express();

var ect = require('ect');
var renderer = ect({
  root: __dirname + 'views',
  ext: '.ect'
});

app.set('view engine', 'ect');
app.engine('ect', renderer.render);

app.get('/hello', function(req, res) {
  // res.send('<html><head></head><body><form><input name="name"/> <button type="submit">Say Hello</button></form><h1>Hello, ' + req.query.name + '</h1></body></html>');
  res.render('hello', { name: req.query.name });
});

var port = 3000;
app.listen(port, function() {
  console.log('Server is listening in port ' + port);
});
