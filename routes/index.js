const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Domains Notes' });
});

router.get('/ajax', function(req, res, next) {
    fs.writeFileSync('public/db.txt', req.hostname);
    res.send({'ip': req.ip, host: req.hostname});
});

module.exports = router;
