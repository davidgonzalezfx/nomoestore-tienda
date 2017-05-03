var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Items = mongoose.model('Items');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/phones', function (req, res, next) {
  Items.find({type: "Phone"} ,function (err, Items) {
    if (err) return next(err);
    res.render('computers', {
      title: 'Phones',
      items: Items
    });
  });
});