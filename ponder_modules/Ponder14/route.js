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
router.get('/ponder14/', (req, res) => res.render('Ponder14/login'));

/*****************************************
 * Inbox, Outbox and Messages
*****************************************/

// Display Inbox
router.get('/ponder14/inbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder14/messageInbox'));

// Display Outbox
router.get('/ponder14/outbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder14/messageOutbox'));

// Compose Message
router.get('/ponder14/composeMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder14/composeMessage'));

// Get Inbox
router.get('/ponder14/getInbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.getInbox(req, res));

// Get Outbox
router.get('/ponder14/getOutbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.getOutbox(req, res));

// Get Message
router.get('/ponder14/getMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.getMessage(req, res));

// Delete Message
router.delete('/ponder14/deleteMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.deleteMessage(req, res));

// Send Message
router.post('/ponder14/sendMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => messages.sendMessage(req, res));

// Update Message as Read
router.post('/ponder14/updateMessageRead', (req, res, next) => { 
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
router.get('/ponder14/contacts', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder14/contacts'));

// Get Available Contacts
router.get('/ponder14/getAvailableContacts', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => contacts.getAvailableContacts(req, res));

// Get Current Contacts
router.get('/ponder14/getCurrentContacts', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => contacts.getCurrentContacts(req, res));

// Delete Contact
router.delete('/ponder14/deleteContact', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => contacts.deleteContact(req, res));

// Add Contact
router.post('/ponder14/addContact', (req, res, next) => { 
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
router.get('/ponder14/settings', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
}, (req, res) => res.render('Ponder14/updateSettings'));

// Get Username
router.get('/ponder14/getUsername', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.getUserName(req, res));

// Get User's Name
router.get('/ponder14/getRealname', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.getRealName(req, res));

// Get User's Email
router.get('/ponder14/getEmail', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.getEmail(req, res));

// Check User's Password
router.post('/ponder14/checkPassword', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => login.checkPassword(req, res));

// Update User's Password
router.post('/ponder14/updatePassword', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => login.updatePassword(req, res));

// Check Email Availablility
router.post('/ponder14/checkEmail', (req, res) => userData.checkEmail(req, res));

// Update Email
router.post('/ponder14/updateEmail', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.updateEmail(req, res));

// Update First Name
router.post('/ponder14/updatefirstName', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.updateFirstName(req, res));

// Update Last Name
router.post('/ponder14/updateLastName', (req, res, next) => {
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
}, (req, res) => userData.updateLastName(req, res));

// Delete Account
router.post('/ponder14/deleteAccount', (req, res, next) => {
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
router.get('/ponder14/register', (req, res) => res.render('Ponder14/register'));

// Check Username Availablility
router.post('/ponder14/checkUsername', (req, res) => userData.checkUsername(req, res));

// Create New User Account
router.post('/ponder14/createAccount', (req, res) => login.createAccount(req, res));

/*****************************************
 * Login
*****************************************/

// Login
router.post('/ponder14/login', (req, res) => login.login(req, res));

// Redirect to Logout
router.get('/ponder14/logout', (req, res) => res.render('Ponder14/redirect'));

// Logout
router.post('/ponder14/logout', (req, res) => login.logout(req, res));

/*****************************************
 * End of Routing
*****************************************/

module.exports = router;