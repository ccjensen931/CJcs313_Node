const express = require('express');
let calculate = require('./calculate.js');
let parser = require('body-parser');
let router = express.Router();

router.get('/ponder09/', (req, res) => res.render('Ponder09/form'));
router.get('/ponder09/getRate', (req, res) => res.render('Ponder09/rate', {result: "0.00"}));
router.use(parser.urlencoded({extended : true}));
router.post('/ponder09/getRate', (req, res) => { let cost = calculate(req.body.Type, req.body.Weight); res.render('Ponder09/rate', {result: cost}); });

module.exports = router;