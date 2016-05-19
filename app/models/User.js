var users = [{
  id: 0,
  name: 'ken'
}, {
  id: 1,
  name: 'hatu'
}];

var User = {
  getUsersSync: function() {
    return users;
  },
  deleteSync: function(id) {
    console.log('deleting user with id: ' + id);
    var new_users = [];

    for (var index in users) {
      if(users[index].id !== id) {
        console.log(index);
        new_users.push(users[index]);
      }
    }
    console.log('deleted user');
    return new_users;
  }
};
module.exports = User;
