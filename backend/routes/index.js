var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/RESTTest', function(req, res){
  res.json({ name: 'RESTTest', value: 'Calculate' });
});

module.exports = router;
