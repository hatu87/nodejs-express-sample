var HelloController = {
  index: function(req, res) {
    res.render('hello/hello', { name: req.query.name });
  }
}

module.exports = HelloController;
