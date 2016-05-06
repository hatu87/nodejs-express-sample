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

// controllers
var helloCtrl = require('./app/controllers/HelloController');
var calculatorCtrl = require('./app/controllers/CalculatorController');

// routes
app.get('/hello', helloCtrl.index);
app.get('/calculator', calculatorCtrl.index);
app.post('/calculator', calculatorCtrl.calculate);

var port = 3000;
app.listen(port, function() {
  console.log('Server is listening in port ' + port);
});
