var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.set('view engine', 'ejs');


app.use('/resources', express.static('resources'));

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.post('/adminLogin', function(req, res, next){
  res.render('dashboard');
});

app.get('/monitorReservations', function(req, res){
  res.render('monitorReservations');
});

app.get('/approveReservations', function(req, res){
  res.render('approveReservations');
});

app.get('/alterMenu', function(req, res){
  res.render('alterMenu');
});

app.get('/sendOrders', function(req, res){
  res.render('sendOrders');
});

app.get('/accomodateSpecialRequests', function(req, res){
  res.render('accomodateSpecialRequests');
});

app.get('/adjustWalkins', function(req, res){
  res.render('adjustWalkins');
});

// to be removed later, to prevent direct access
app.get('/adminLogin', function(req, res){
  res.render('dashboard');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
 });
