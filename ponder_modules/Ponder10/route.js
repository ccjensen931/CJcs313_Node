const express = require('express');
let parser = require('body-parser');
let router = express.Router();

let getInbox = require('./getInbox.js');

router.use(parser.urlencoded({extended : true}));
router.get('/ponder10/', (req, res) => res.send('Navigate to ponder10/inbox'));
router.get('/ponder10/inbox', (req, res) => res.render('Ponder10/messageInbox'));
router.get('/ponder10/getInbox', (req, res) => { let messages = getInbox(req, res); res.json({"messages: " : messages}) });

module.exports = router;