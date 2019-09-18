const express = require('express');
const site = require('./api/site.route');

var router = express.Router();

router.use('/site', site);

module.exports = router;