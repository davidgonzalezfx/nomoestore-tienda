var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Items = mongoose.model('Items');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/about', function (req, res, next) {
  res.render('about', {
  	title: 'About Us'
  })
});