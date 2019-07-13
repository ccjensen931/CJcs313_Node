// Libraries and premade imports
const express = require('express');
let parser = require('body-parser');
let router = express.Router();

// Custom imports for data retrieval
let messages = require('./manageMessages.js');
let userData = require('./manageUserData.js');
let contacts = require('./manageContacts.js');
let login = require('./passwordManagement');

router.use(parser.urlencoded({extended : true}));
router.get('/ponder12/', (req, res) => res.render('Ponder12/login'));

/*****************************************
 * Inbox, Outbox and Messages
*****************************************/

// Display Inbox
router.get('/ponder12/inbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder12/messageInbox'));

// Display Outbox
router.get('/ponder12/outbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder12/messageOutbox'));

// Compose Message
router.get('/ponder12/composeMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder12/composeMessage'));

// Get Inbox
router.get('/ponder12/getInbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.getInbox(req, res));

// Get Outbox
router.get('/ponder12/getOutbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.getOutbox(req, res));

// Get Message
router.get('/ponder12/getMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.getMessage(req, res));

// Delete Message
router.delete('/ponder12/deleteMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.deleteMessage(req, res));

// Send Message
router.post('/ponder12/sendMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.sendMessage(req, res));

// Update Message as Read
router.post('/ponder12/updateMessageRead', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.updateMessageRead(req, res));

/*****************************************
 * Contacts
*****************************************/

// Display Contacts
router.get('/ponder12/contacts', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder12/contacts'));

// Get Available Contacts
router.get('/ponder12/getAvailableContacts', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => contacts.getAvailableContacts(req, res));

// Get Current Contacts
router.get('/ponder12/getCurrentContacts', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => contacts.getCurrentContacts(req, res));

// Delete Contact
router.delete('/ponder12/deleteContact', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => contacts.deleteContact(req, res));

// Add Contact
router.post('/ponder12/addContact', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => contacts.addContact(req, res));

/*****************************************
 * Settings and User Data
*****************************************/

// Display Settings
router.get('/ponder12/settings', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder12/updateSettings'));

// Get Username
router.get('/ponder12/getUsername', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.getUserName(req, res));

// Get User's Name
router.get('/ponder12/getRealname', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.getRealName(req, res));

// Get User's Email
router.get('/ponder12/getEmail', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.getEmail(req, res));

// Check User's Password
router.post('/ponder12/checkPassword', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => login.checkPassword(req, res));

// Update User's Password
router.post('/ponder12/updatePassword', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => login.updatePassword(req, res));

// Check Email Availablility
router.post('/ponder12/checkEmail', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.checkEmail(req, res));

// Update Email
router.post('/ponder12/updateEmail', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.updateEmail(req, res));

// Update First Name
router.post('/ponder12/updatefirstName', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.updateFirstName(req, res));

// Update Last Name
router.post('/ponder12/updateLastName', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.updateLastName(req, res));

// Delete Account
router.post('/ponder12/deleteAccount', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.deleteAccount(req, res));

/*****************************************
 * Register
*****************************************/

// Display Register
router.get('/ponder12/register', (req, res) => res.send('Coming soon'));

/*****************************************
 * Login
*****************************************/

// Login
router.post('/ponder12/login', (req, res) => login.login(req, res));

// Redirect to Logout
router.get('/ponder12/logout', (req, res) => res.render('Ponder12/redirect'));

// Logout
router.post('/ponder12/logout', (req, res) => login.logout(req, res));

/*****************************************
 * End of Routing
*****************************************/

module.exports = router;