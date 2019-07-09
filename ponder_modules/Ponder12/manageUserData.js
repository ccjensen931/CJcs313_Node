const pool = require('../../general_modules/dbConnect.js');

module.exports = {
    getUserName: function(req, res) {
        const query = {
            name: 'get-username',
            text: 'SELECT username FROM users WHERE user_id = 1;',
            //values: [user_id]
        };
        
        pool.query(query, function(err, result) {
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);
            }   

            // Log this to the console for debugging purposes.
            console.log("Back from DB with result:");
            console.log(result.rows);

            res.json({username: result.rows});
        });},

    getRealName: function(req, res) {
        const query = {
            name: 'get-realname',
            text: 'SELECT first_name, last_name FROM users WHERE user_id = 1;',
            //values: [user_id]
        };
        
        pool.query(query, function(err, result) {
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);
            }   

            // Log this to the console for debugging purposes.
            console.log("Back from DB with result:");
            console.log(result.rows);

            res.json({realname: result.rows});
        });}
};