// controllers
var helloCtrl = require('../app/controllers/HelloController');
var calculatorCtrl = require('../app/controllers/CalculatorController');
var usersCtrl = require('../app/controllers/UsersController');
var usersApiCtrl = require('../app/controllers/api/UsersController');
// routes
//
var configRoutes = function(app) {
  app.get('/hello', helloCtrl.index);
  app.get('/calculator', calculatorCtrl.index);
  app.post('/calculator', calculatorCtrl.calculate);
  app.get('/users', usersCtrl.index);
  app.delete('/users/:id', usersCtrl.destroy);

  app.get('/api/users', usersApiCtrl.index);
  app.delete('/api/users/:id', usersApiCtrl.destroy);
}

module.exports = configRoutes;
