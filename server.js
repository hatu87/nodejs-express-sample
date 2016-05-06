var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var ect = require('ect');
var renderer = ect({
  root: __dirname + 'views',
  ext: '.ect'
});

app.set('view engine', 'ect');
app.engine('ect', renderer.render);
app.set('views', './app/views');

app.use(bodyParser.urlencoded({ extended: true }));

require('./config/routes')(app);

var port = 3000;
app.listen(port, function() {
  console.log('Server is listening in port ' + port);
});
