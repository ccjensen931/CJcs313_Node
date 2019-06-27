const express = require('express');
let parser = require('body-parser');
let router = express.Router();

router.use(parser.urlencoded({extended : true}));
router.get('/ponder10/', (req, res) => res.send('Navigate to ponder10/inbox'));
router.get('/ponder10/inbox', (req, res) => res.render('Ponder10/messageInbox'));

module.exports = router;