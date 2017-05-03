var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Items = mongoose.model('Items');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/admin', function (req, res, next) {
  res.render('admin', {
  	title: 'Agrega un producto'
  })
});
router.post('/admin', function (req, res, next) {
  var newDev = new Items({
  	name: req.body.name,
  	type: req.body.type,
  	color: req.body.color,
  	img: req.body.img,
  	price: req.body.price
  })

  newDev.save()

  res.redirect('/')
});