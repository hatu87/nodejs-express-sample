// controllers
var helloCtrl = require('../app/controllers/HelloController');
var calculatorCtrl = require('../app/controllers/CalculatorController');
// routes
//
var configRoutes = function(app) {
  app.get('/hello', helloCtrl.index);
  app.get('/calculator', calculatorCtrl.index);
  app.post('/calculator', calculatorCtrl.calculate);
}

module.exports = configRoutes;
