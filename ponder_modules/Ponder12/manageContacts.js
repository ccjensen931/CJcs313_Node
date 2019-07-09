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

            res.json({contacts: result.rows});
    });},
    getCurrentContacts: function(req, res) {
        const query = {
            name: 'get-current-contacts',
            text: 'SELECT u.user_id, u.username, u.first_name, u.last_name FROM users u JOIN contacts c ON u.user_id = c.owner_contact_id WHERE c.owner_id = 1;',
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

            res.json({contacts: result.rows});
    });},
    addContact: function(req, res) {
        console.log("Add Contact!");
        console.log(req.body);
    },
    deleteContact: function(req, res) {
        console.log("Delete Contact!");
        console.log(req.body);
    }
};