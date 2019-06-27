const express = require('express');
let parser = require('body-parser');
let router = express.Router();

router.use(parser.urlencoded({extended : true}));
router.get('/ponder10/', (req, res) => res.send("This is Project 2"));

module.exports = router;