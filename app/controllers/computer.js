var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Items = mongoose.model('Items');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/computers', function (req, res, next) {
  Items.find({type: "PC"} ,function (err, Items) {
    if (err) return next(err);
    res.render('computers', {
      title: 'Computers',
      items: Items
    });
  });
});