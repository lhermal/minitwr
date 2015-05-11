var express = require('express');
var router = express.Router();

var tweets = [];

/* GET home page. */
router.get('/octochat', function(req, res, next) {
  res.render('octochat', { title: 'miniTwr', tweets: tweets });
});

router.post('/octochat', function(req, res, next) {
    tweets({usrname: req.body.pseudo, tet: req.body.tweet});
    res.redirect('/octochat')
});

module.exports = router;
