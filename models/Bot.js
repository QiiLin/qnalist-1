var mongoose = require('mongoose');

var BotSchema = new mongoose.Schema({
  timestamp: String,
  question : String,
  answer : String
    }, {collection : 'botdata'});
  module.exports = mongoose.model('botdata', BotSchema);