var Calculator = require('../models/Calculator');

var CalculatorController = {
  index: function(req, res) {
    res.render('calculator/calculator');
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

  res.render('calculator/calculator', { result: result, numA: a, numB: b, message: message });
  }
};

module.exports = CalculatorController;
