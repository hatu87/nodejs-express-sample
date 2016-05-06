var express = require('express');

var app = express();

require('./config/express')(app);
require('./config/routes')(app);

var port = 3000;
app.listen(port, function() {
  console.log('Server is listening in port ' + port);
});
