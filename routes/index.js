//Created by Grant MacMillan
var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Projects page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});
module.exports = router;
