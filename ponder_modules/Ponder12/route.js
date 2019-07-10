// Libraries and premade imports
const express = require('express');
let parser = require('body-parser');
let router = express.Router();

// Custom imports for data retrieval
let messages = require('./manageMessages.js');
let userData = require('./manageUserData.js');
let contacts = require('./manageContacts.js');
let login = require('./login');

router.use(parser.urlencoded({extended : true}));
router.get('/ponder12/', (req, res) => res.render('Ponder12/login'));
router.get('/ponder12/inbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
},(req, res) => res.render('Ponder12/messageInbox'));
router.get('/ponder12/outbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
},(req, res) => res.render('Ponder12/messageOutbox'));
router.get('/ponder12/contacts', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
},(req, res) => res.render('Ponder12/contacts'));
router.get('/ponder12/settings', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.redirect('./');
    }
},(req, res) => res.send('Coming soon'));
router.get('/ponder12/register', (req, res) => res.send('Coming soon'));
router.get('/ponder12/getInbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => messages.getInbox(req, res));
router.get('/ponder12/getOutbox', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => messages.getOutbox(req, res));
router.get('/ponder12/getMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => messages.getMessage(req, res));
router.delete('/ponder12/deleteMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => messages.deleteMessage(req, res));
router.post('/ponder12/sendMessage', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => messages.sendMessage(req, res));
router.get('/ponder12/getUsername', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => userData.getUserName(req, res));
router.get('/ponder12/getRealname', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => userData.getRealName(req, res));
router.get('/ponder12/getAvailableContacts', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => contacts.getAvailableContacts(req, res));
router.get('/ponder12/getCurrentContacts', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => contacts.getCurrentContacts(req, res));
router.delete('/ponder12/deleteContact', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => contacts.deleteContact(req, res));
router.post('/ponder12/addContact', (req, res, next) => { 
    if (req.session.user_id) {
        next();
    } else {
        res.status(401).json({ error: "You must be logged in to access this service!" });
    }
},(req, res) => contacts.addContact(req, res));
router.post('/ponder12/login', (req, res) => login.login(req, res));
router.get('/ponder12/logout', (req, res) => res.render('Ponder12/redirect'));
router.post('/ponder12/logout', (req, res) => login.logout(req, res));

module.exports = router;