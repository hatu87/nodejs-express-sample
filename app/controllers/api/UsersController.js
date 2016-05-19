var User = require('../../models/User');
module.exports = {
  index: function(req, res) {
    res.json(User.getUsersSync());
  },

  destroy: function(req, res) {
    console.log(req.params);
    var id = parseInt(req.params.id);
    console.log(id);
    var users = User.deleteSync(id);
    console.log(users.length);
    res.json({
      result: users.length < 2
    });
  }
}
