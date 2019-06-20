const express = require('express');
let calculate = require('./calculate.js');
let router = express.Router();

router.get('/math_form', (req, res) => res.render('TeamActivity09/form'));
router.get('/math', (req, res) => { let result = calculate(req, res); res.render('TeamActivity09/math', {result: result}); });
router.get('/math_service', (req, res) => { let result = calculate(req, res); res.json({"Result: " : result}); });

module.exports = router;