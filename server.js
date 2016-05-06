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


var Calculator = require('./app/models/Calculator');

// controllers
var HelloController = {
  index: function(req, res) {
    res.render('hello', { name: req.query.name });
  }
}
var CalculatorController = {
  index: function(req, res) {
    res.render('calculator');
  },
  calculate: function(req, res) {
    console.log(req.body);
  var a = parseInt(req.body.a);
  var b = parseInt(req.body.b);
  var operator = req.body.operator;

  var message = {};
  var result;

  if (isNaN(a) || isNaN(b)) {
    message.error = "a or b is not number. Please try again with valid numbers.";
  } else {
    message.success = "Calculation successfully.";

    try {
      result = Calculator.calculate(a, b, operator);
    } catch(e) {
      message.error = e.message;
    }
  }

  res.render('calculator', { result: result, numA: a, numB: b, message: message });
  }
};

// routes
app.get('/hello', HelloController.index);
app.get('/calculator', CalculatorController.index);
app.post('/calculator', CalculatorController.calculate);

var port = 3000;
app.listen(port, function() {
  console.log('Server is listening in port ' + port);
});
