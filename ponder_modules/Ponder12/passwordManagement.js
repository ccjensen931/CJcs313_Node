const pool = require('../../general_modules/dbConnect.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    login: function(req, res) {
        const query = {
            name: 'get-login',
            text: 'SELECT u.user_id, u.user_password, u.delete_account FROM users u WHERE u.username = $1;',
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

            if (result.rows[0]) {
                if (!result.rows[0].delete_account) {
                    bcrypt.compare(req.body.password, result.rows[0].user_password, function(err, passwordResult) {
                        if (passwordResult == true) {
                            req.session.user_id = result.rows[0].user_id;
                            res.json({success: true});
                        } else {
                            res.json({success: false});
                        }
                    });
                } else {
                    res.json({success: false});
                }
            } else {
                res.json({success: false});
            }
        });
    },
    logout: function(req, res) {
        let sessionDestroyed = false;
        if (req.session.user_id) {
            res.clearCookie("user_sid");
            sessionDestroyed = true;
        }

        res.json({success: sessionDestroyed});
    },
    checkPassword: function(req, res) {
        const query = {
            name: 'check-password',
            text: 'SELECT u.user_password FROM users u WHERE u.user_id = $1;',
            values: [req.session.user_id]
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

            if (result.rows[0]) {
                bcrypt.compare(req.body.password, result.rows[0].user_password, function(err, passwordResult) {
                    if (passwordResult == true) {
                        res.json({correct: true});
                    } else {
                        res.json({correct: false});
                    }
                });
            }
        });
    },
    updatePassword: function(req, res) {
        bcrypt.hash(req.body.newPassword, saltRounds, function(err, hash) {
            const query = {
                name: 'update-password',
                text: 'UPDATE users SET user_password = $1 WHERE user_id = $2',
                values: [hash, req.session.user_id]
            };
    
            pool.query(query, function(err, result) {
                let updateSuccessful = true;
                // If an error occurred...
                if (err) {
                    console.log("Error in query: ")
                    console.log(err);
                    updateSuccessful = false;
                }   
    
                // Log this to the console for debugging purposes.
                // console.log("Back from DB with result:");
                // console.log(result.rows);
    
                res.json({success: updateSuccessful});
            });
        });
    }
};