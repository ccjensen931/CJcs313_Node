const express = require('express');
let getPerson = require('./getPerson.js');
let parser = require('body-parser');
let router = express.Router();

router.get('/team10/', (req, res) => res.render('TeamActivity10/form'));
router.use(parser.urlencoded({extended : true}));
router.get('/team10/getPerson', (req, res) => getPerson(req.query.user_id, res));

module.exports = router;