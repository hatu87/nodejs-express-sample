var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var ect = require('ect');
var renderer = ect({
  root: __dirname + 'views',
  ext: '.ect'
});

app.set('view engine', 'ect');
app.engine('ect', renderer.render);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', function(req, res) {
  res.render('hello', { name: req.query.name });
});

app.get('/calculator', function(req, res) {
  res.render('calculator');
});

app.post('/calculator', function(req, res) {
  console.log(req.body);
  var a = parseInt(req.body.a);
  var b = parseInt(req.body.b);

  var result = a + b;
  res.render('calculator', { result: result, numA: a, numB: b });
});

var port = 3000;
app.listen(port, function() {
  console.log('Server is listening in port ' + port);
});
