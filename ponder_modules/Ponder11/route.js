// Libraries and premade imports
const express = require('express');
let parser = require('body-parser');
let router = express.Router();

// Custom imports for data retrieval
let messages = require('./manageMessages.js');
let userData = require('./manageUserData.js');
let contacts = require('./manageContacts.js');

router.use(parser.urlencoded({extended : true}));
router.get('/ponder11/', (req, res) => res.send('Navigate to ponder11/inbox or ponder11/outbox'));
router.get('/ponder11/inbox', (req, res) => res.render('Ponder11/messageInbox'));
router.get('/ponder11/outbox', (req, res) => res.render('Ponder11/messageOutbox'));
router.get('/ponder11/contacts', (req, res) => res.render('Ponder11/contacts'));
router.get('/ponder11/settings', (req, res) => res.send('Coming soon'));
router.get('/ponder11/getInbox', (req, res) => messages.getInbox(req, res));
router.get('/ponder11/getOutbox', (req, res) => messages.getOutbox(req, res));
router.get('/ponder11/getMessage', (req, res) => messages.getMessage(req, res));
router.delete('/ponder11/deleteMessage', (req, res) => messages.deleteMessage(req, res));
router.post('/ponder11/sendMessage', (req, res) => messages.sendMessage(req, res));
router.get('/ponder11/getUsername', (req, res) => userData.getUserName(req, res));
router.get('/ponder11/getRealname', (req, res) => userData.getRealName(req, res));
router.get('/ponder11/getAvailableContacts', (req, res) => contacts.getAvailableContacts(req, res));
router.get('/ponder11/getCurrentContacts', (req, res) => contacts.getCurrentContacts(req, res));
router.delete('/ponder11/deleteContact', (req, res) => contacts.deleteContact(req, res));
router.post('/ponder11/addContact', (req, res) => contacts.addContact(req, res));

module.exports = router;