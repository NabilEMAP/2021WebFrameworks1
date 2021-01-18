// load the things we need
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const axios = require('axios').default;
//const DB_URL = "http://127.0.0.1:5984/products/";
const DB_URL = "localhost:5984/movies/";
const DB_VIEWS = "_design/views/_view/";

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// use res.render to load up an ejs view file


// index page
app.get('/', (req, res) => {
    axios.get(DB_URL + DB_VIEWS + 'allMovies')
    .then(function (response) {
        console.log(response.data.rows);
        res.render('index.js', { movies: response.data.rows });
      })
      .catch(function (error) {
        console.log("The error is: \n "+ error);
      })
      .then(function () {
        // always executed
      });
})



// FIND A MOVIE
app.post('/search', (req, res) => {
    //console.log(DB_URL + DB_VIEWS + 'allProducts' + '?key="' + req.body.name + '"');
    axios.get(DB_URL + DB_VIEWS + 'allMovies' + '?key="' + req.body.name + '"')
      .then(function (response) {
        //console.log(response.data.rows[0]);
        if(response.data.rows[0])
          res.render('search_result.ejs', { movie: response.data.rows[0].value });
        else
          res.render('search_not_found.ejs', {})
      })
      .catch(function (error) {
        console.log(error);
      })
  })
  

/*
app.get('/', function(req, res) {
    var movies = [
        {
             _id: '505873ae5adc85198d0576176f006f3c', 
            name: "Bad times at the El Royale",
             actors: ["Jeff Bridges, Jon Hamm, Dakota Johnson"]
        }
    ];
    var tagline = "Movies";

    res.render('index', {
        movies: movies,
        tagline: tagline
    });
});
*/


// about page
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(4000);
console.log('check localhost:4000');
