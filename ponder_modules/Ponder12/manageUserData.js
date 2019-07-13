const pool = require('../../general_modules/dbConnect.js');

module.exports = {
    getUserName: function(req, res) {
        const query = {
            name: 'get-username',
            text: 'SELECT username FROM users WHERE user_id = $1;',
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

            res.json({username: result.rows});
        });
    },
    getRealName: function(req, res) {
        const query = {
            name: 'get-realname',
            text: 'SELECT first_name, last_name FROM users WHERE user_id = $1;',
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

            res.json({realname: result.rows});
        });
    },
    getEmail: function(req, res) {
        const query = {
            name: 'get-email',
            text: 'SELECT u.email FROM users u WHERE u.user_id = $1;',
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

            res.json({email: result.rows});
        });
    },
    checkEmail: function(req, res) {
        const query = {
            name: 'check-email',
            text: 'SELECT u.user_id FROM users u WHERE u.email = $1;',
            values: [req.body.email]
        };

        pool.query(query, function(err, result) {
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);
            }   

            // Log this to the console for debugging purposes.
            // console.log("Back from DB with result:");
            // console.log(result.rows[0]);
            if (result.rows[0]) {
                res.json({available: false});
             } else {
                 res.json({available: true});
             }
        });
    },
    updateEmail: function(req, res) {
        const query = {
            name: 'update-email',
            text: 'UPDATE users SET email = $1 WHERE user_id = $2;',
            values: [req.body.email, req.session.user_id]
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
            // console.log(result.rows[0]);
            
            res.json({success: updateSuccessful});
        });
    },
    updateFirstName: function(req, res) {
        const query = {
            name: 'update-first-name',
            text: 'UPDATE users SET first_name = $1 WHERE user_id = $2;',
            values: [req.body.firstName, req.session.user_id]
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
            // console.log(result.rows[0]);
            
            res.json({success: updateSuccessful});
        });
    },
    updateLastName: function(req, res) {
        const query = {
            name: 'update-last-name',
            text: 'UPDATE users SET last_name = $1 WHERE user_id = $2;',
            values: [req.body.lastName, req.session.user_id]
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
            // console.log(result.rows[0]);
            
            res.json({success: updateSuccessful});
        });
    },
    deleteAccount: function(req, res) {
        const query = {
            name: 'delete-account',
            text: 'UPDATE users SET delete_account = TRUE WHERE user_id = $1;',
            values: [req.session.user_id]
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
            // console.log(result.rows[0]);
            
            res.json({success: updateSuccessful});
        });
    }
};