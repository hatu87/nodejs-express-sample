var HelloController = {
  index: function(req, res) {
    res.render('hello', { name: req.query.name });
  }
}

module.exports = HelloController;
