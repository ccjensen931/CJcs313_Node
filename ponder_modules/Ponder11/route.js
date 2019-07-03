// Libraries and premade imports
const express = require('express');
let parser = require('body-parser');
let router = express.Router();

// Custom imports for data retrieval
let getMessages = require('./getMessages.js');
let getUserData = require('./getUserData.js');

router.use(parser.urlencoded({extended : true}));
router.get('/ponder11/', (req, res) => res.send('Navigate to ponder11/inbox or ponder11/outbox'));
router.get('/ponder11/inbox', (req, res) => res.render('Ponder11/messageInbox'));
router.get('/ponder11/outbox', (req, res) => res.render('Ponder11/messageOutbox'));
router.get('/ponder11/contacts', (req, res) => res.send('Coming soon'));
router.post('/ponder11/getInbox', (req, res) => getMessages.getInbox(req, res));
router.post('/ponder11/getOutbox', (req, res) => getMessages.getOutbox(req, res));
router.post('/ponder11/getMessage', (req, res) => getMessages.getMessage(req, res));
router.post('/ponder11/getUsername', (req, res) => getUserData.getUserName(req, res));
router.post('/ponder11/getRealname', (req, res) => getUserData.getRealName(req, res));

module.exports = router;