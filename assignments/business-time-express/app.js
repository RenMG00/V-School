var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var pug = require('pug');
var logger = require('morgan');
var app = express();
var myMenuJson = require('./myMenu.json')

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname+'/views');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname+'/public')));

function initMap() { 
  var test= {lat: 40.761753, lng: -111.903092}; 
  var map = new google.maps.Map ({ 
    zoom: 4,
    center: test 
  });
  var marker = new google.maps.Marker({ 
    position: test, 
    map: map 
  }); 
}
app.get('/', function(req, res, next) {
  res.render('homeD', { 
    title: 'Burger Co.',
    });
});
app.get('/directions', function(req, res, next) {
  res.render('directions', {
    title: 'Directions',
    });
});
app.get('/burgers', function(req, res, next) {
  res.render('index', { 
    title: 'Burgers',
    myMenuJson: myMenuJson.burgers
    });
});
app.get('/desserts', function(req, res, next) {
  res.render('index', { 
    title: 'Desserts',
    myMenuJson: myMenuJson.desserts
    });
});
app.get('/sides', function(req, res, next) {
  res.render('index', { 
    title: 'Sides',
    myMenuJson: myMenuJson.sides
  });
});


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//  next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error',{
//     error:err
//   });
// });


module.exports = app;
