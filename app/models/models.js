var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
  original_url: String,
  short_url: String,
  identifier: String
});

var URLmodel = mongoose.model('URL', urlSchema);

module.exports = URLmodel;