var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var db;

/* GET overtredingen listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true}, (err, database) => {
  if (err) return console.log(err)
  db = database.db('examen')

  /* GET ALL overtredingen */
  router.get('/', (req, res) => {
    db.collection('overtredingen').find().toArray((err, result) => {
      if (err) return
      res.render('/index.js', { products: result })
    })
  })

  /* FIND A overtreding */
  router.post('/search', (req, res) => {
  var query = { name: req.body.name }
  db.collection('overtredingen').findOne(query, (err, result) => {
    if (err) return
    if (result == '')
        res.render('search_not_found.ejs', {})
    else
        res.render('search_result.ejs', { product: result })
  });
  })

})

module.exports = router;
