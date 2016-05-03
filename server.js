var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
  res.send('Hello, ' + req.query.name);
});

var port = 3000;
app.listen(port, function() {
  console.log('Server is listening in port ' + port);
});
