const express = require('express');
let parser = require('body-parser');
let router = express.Router();

let getMessages = require('./getMessages.js');

router.use(parser.urlencoded({extended : true}));
router.get('/ponder10/', (req, res) => res.send('Navigate to ponder10/inbox or ponder10/outbox'));
router.get('/ponder10/inbox', (req, res) => res.render('Ponder10/messageInbox'));
router.get('/ponder10/outbox', (req, res) => res.render('Ponder10/messageOutbox'));
router.get('/ponder10/getInbox', (req, res) => getMessages.getInbox(req, res));
router.get('/ponder10/getOutbox', (req, res) => getMessages.getOutbox(req, res));
router.get('/ponder10/getMessage', (req, res) => getMessages.getMessage(req, res));

module.exports = router;