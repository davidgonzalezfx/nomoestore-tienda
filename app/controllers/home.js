var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Items = mongoose.model('Items');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Items.find(function (err, Items) {
    if (err) return next(err);
    res.render('index', {
      title: 'Welcome to the best online store',
      items: Items
    });
  });
});
