var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, ken');
});

var port = 3000;
app.listen(port, function() {
  console.log('Server is listening in port ' + port);
});