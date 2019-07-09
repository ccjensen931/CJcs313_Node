// Libraries and premade imports
const express = require('express');
let parser = require('body-parser');
let router = express.Router();

// Custom imports for data retrieval
let messages = require('./manageMessages.js');
let userData = require('./manageUserData.js');
let contacts = require('./manageContacts.js');

router.use(parser.urlencoded({extended : true}));
router.get('/ponder12/', (req, res) => res.send('Navigate to ponder12/inbox or ponder12/outbox'));
router.get('/ponder12/inbox', (req, res) => res.render('Ponder12/messageInbox'));
router.get('/ponder12/outbox', (req, res) => res.render('Ponder12/messageOutbox'));
router.get('/ponder12/contacts', (req, res) => res.render('Ponder12/contacts'));
router.get('/ponder12/settings', (req, res) => res.send('Coming soon'));
router.get('/ponder12/getInbox', (req, res) => messages.getInbox(req, res));
router.get('/ponder12/getOutbox', (req, res) => messages.getOutbox(req, res));
router.get('/ponder12/getMessage', (req, res) => messages.getMessage(req, res));
router.delete('/ponder12/deleteMessage', (req, res) => messages.deleteMessage(req, res));
router.post('/ponder12/sendMessage', (req, res) => messages.sendMessage(req, res));
router.get('/ponder12/getUsername', (req, res) => userData.getUserName(req, res));
router.get('/ponder12/getRealname', (req, res) => userData.getRealName(req, res));
router.get('/ponder12/getAvailableContacts', (req, res) => contacts.getAvailableContacts(req, res));
router.get('/ponder12/getCurrentContacts', (req, res) => contacts.getCurrentContacts(req, res));
router.delete('/ponder12/deleteContact', (req, res) => contacts.deleteContact(req, res));
router.post('/ponder12/addContact', (req, res) => contacts.addContact(req, res));

module.exports = router;