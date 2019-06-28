const express = require('express');
let calculate = require('./calculate.js');
let parser = require('body-parser');
let router = express.Router();

router.use(parser.urlencoded({extended : true}));
router.get('/ponder10/', (req, res) => res.send('Ponder10'));

module.exports = router;