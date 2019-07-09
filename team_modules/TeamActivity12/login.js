const pool = require('../../general_modules/dbConnect.js');

module.exports = {
    login: function(req, res) {
        console.log(req.body);
        let loginCorrect = false;
        if (req.body.username == "admin" && req.body.password == "password") {
            loginCorrect = true;
            req.session.username = req.body.username;
        }
        
        res.json({ success: loginCorrect});
    },
    logout: function(req, res) {
        let sessionDestroyed = false;
        if (req.session.username) {
            res.clearCookie("user_sid");
            sessionDestroyed = true;
        }

        res.json({ success: sessionDestroyed});
    },
    getServerTime: function(req, res) {
        let getTimeSuccess = true;
        let time = new Date();
        console.log("Get Server Time!");
        res.json({ success: getTimeSuccess, time: time });
    }
};