var Calculator = {
  calculate: function(a, b, operator) {
    var result;

    switch(operator) {
      case "+":
       result = a + b;
       break;
      case "-":
        result = a - b;
        break;
      default:
        throw new Error('Unknown Operator.');
    }

    return result;
  }
};

module.exports = Calculator;
