var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Botdatas = require('../models/Bot.js');

router.get('/', function(req, res, next) {
  Botdatas.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
module.exports = router;