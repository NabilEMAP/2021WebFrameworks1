// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var movies = [
        {
             _id: '505873ae5adc85198d0576176f006f3c', 
            name: "Bad times at the El Royale",
             actors: ["Jeff Bridges"]
        },
        { 
            _id: '505873ae5adc85198d0576176f006f3d', 
            name: "Bad times at the El Royale", 
            actors: ["Jon Hamm"]
        },
        { 
            _id: '505873ae5adc85198d0576176f006f3e', 
            name: "Bad times at the El Royale", 
            actors: ["Dakota Johnson"]
        },
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
