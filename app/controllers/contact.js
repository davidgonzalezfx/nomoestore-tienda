var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Items = mongoose.model('Items');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/contact', function (req, res, next) {
  res.render('contact', {
  	title: 'Contact and Support'
  })
});