const pool = require('../../general_modules/dbConnect.js');

module.exports = {
    getAvailableContacts: function(req, res) {
        const query = {
            name: 'get-available-contacts',
            text: 'SELECT u.username FROM users u JOIN contacts c ON u.user_id != c.owner_contact_id WHERE c.owner_id = 1 AND u.user_id != 1;',
            //values: [user_id];
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

            res.json({availableContacts: result.rows});
    });},
    getCurrentContacts: function(req, res) {
        const query = {
            name: 'get-available-contacts',
            text: 'SELECT u.username FROM users u JOIN contacts c ON u.user_id = c.owner_contact_id WHERE c.owner_id = 1;',
            //values: [user_id];
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

            res.json({currentContacts: result.rows});
    });}
};