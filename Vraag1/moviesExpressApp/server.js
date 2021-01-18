// load the things we need
var express = require('express');
var app = express();
//const axios = require('axios').default;
//const DB_URL = "http://127.0.0.1:5984/products/";

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var movies = [
        {
             _id: '505873ae5adc85198d0576176f006f3c', 
            name: "Bad times at the El Royale",
             actors: ["Jeff Bridges, Jon Hamm, Dakota Johnson"]
        }
    ];
    var tagline = "Movies";

    res.render('pages/index', {
        movies: movies,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(4000);
console.log('check localhost:4000');
