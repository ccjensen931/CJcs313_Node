const express = require('express');
let parser = require('body-parser');
let router = express.Router();

let userControl = require('./login.js');

router.get('/team12/', (req, res) => res.render('TeamActivity12/test'));
router.post('/team12/login', (req, res) => userControl.login(req, res));
router.post('/team12/logout', (req, res) => userControl.logout(req, res));
router.get('/team12/getServerTime', (req, res, next) => { 
    if (req.session.username) {
        next();
    } else {
        res.status(401).json({ error: "You are not logged in!" });
    }
}, (req, res) => userControl.getServerTime(req, res));

module.exports = router;