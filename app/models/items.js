var mongoose = require('mongoose'),
  	Schema = mongoose.Schema;

var Items = new Schema({
  type: String,
  name: String,
  price: String,
  color: String,
  img: String
});

mongoose.model('Items', Items);

