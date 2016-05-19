var User = require('../models/User');
module.exports = {
  index: function(req, res) {
    res.render('users/index', {
      users: User.getUsersSync()
    });
  },

  destroy: function(req, res) {
    var id = req.params.id;

    var users = User.deleteSync(id);

    res.render('users/index', {
      users: users
    });
  }
}
