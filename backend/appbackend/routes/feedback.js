var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render('index',{title:'calling from feedback'});
});

module.exports = router;