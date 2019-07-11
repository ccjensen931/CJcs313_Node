const pool = require('../../general_modules/dbConnect.js');

module.exports = {
    login: function(req, res) {
        const query = {
            name: 'get-login',
            text: 'SELECT u.user_id, u.user_password FROM users u WHERE u.username = $1;',
            values: [req.body.username]
        };

        pool.query(query, function(err, result) {
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);
        }   

            // Log this to the console for debugging purposes.
            // console.log("Back from DB with result:");
            // console.log(result.rows);

            let loginSuccessful = false;
            if (result.rows[0] && result.rows[0].user_password == req.body.password) {
                loginSuccessful = true;
                req.session.user_id = result.rows[0].user_id;
            }

            res.json({success: loginSuccessful});
        });
    },
    logout: function(req, res) {
        let sessionDestroyed = false;
        if (req.session.user_id) {
            res.clearCookie("user_sid");
            sessionDestroyed = true;
        }

        res.json({success: sessionDestroyed});
    }
};