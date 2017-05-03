var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Items = mongoose.model('Items');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/swatches', function (req, res, next) {
  Items.find({type: "Watch"} ,function (err, Items) {
    if (err) return next(err);
    res.render('computers', {
      title: 'SWatches',
      items: Items
    });
  });
});