const express = require('express');
let parser = require('body-parser');
let router = express.Router();

router.get('/team11/', (req, res) => res.render('TeamActivity11/mainView'));

module.exports = router;