var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var MongoDBurl = process.env.CUSTOMCONNSTR_URL;

var bot = require('./routes/bot');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect('put ur own mongodb')
  // .then(() =>  console.log('connection succesful'))
   //.catch((err) => console.error(err));

// the data base will look like this for each entry 
// question, answer , timestamp and they are all string type.

//mongodb://localhost:27017/mean-angular5
mongoose.connect(MongoDBurl, {keepAlive:120 , autoReconnect:true})
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/DataTable', express.static(path.join(__dirname, 'dist')));
app.use('/bot', bot);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
