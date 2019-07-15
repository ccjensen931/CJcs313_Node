const pool = require('../../general_modules/dbConnect.js');

module.exports = {
    getAvailableContacts: function(req, res) {
        const query = {
            name: 'get-available-contacts',
            text: 'SELECT DISTINCT u.username FROM users u WHERE u.user_id NOT IN (SELECT user_id FROM users JOIN contacts c ON u.user_id = c.owner_contact_id WHERE c.owner_id = $1) AND u.user_id != $1 AND u.delete_account = FALSE;',
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

            res.json({contacts: result.rows});
        });
    },
    getCurrentContacts: function(req, res) {
        const query = {
            name: 'get-current-contacts',
            text: 'SELECT u.user_id, u.username, u.first_name, u.last_name FROM users u JOIN contacts c ON u.user_id = c.owner_contact_id WHERE c.owner_id = $1;',
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

            res.json({contacts: result.rows});
        });
    },
    addContact: function(req, res) {
        const query = {
            name: 'add-contact',
            text: "INSERT INTO contacts VALUES (nextval('contacts_s1'), $1, (SELECT u.user_id FROM users u WHERE u.username = $2));",
            values: [req.session.user_id, req.body.username]
        };
        pool.query(query, function(err, result) {
            let addContactSuccess = true;
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);
                addContactSuccess = false;
            }

            // Log this to the console for debugging purposes.
            // console.log("Back from DB with result:");
            // console.log(result);

            res.json({success: addContactSuccess});
        });
    },
    deleteContact: function(req, res) {
        // console.log("Delete Contact!");
        // console.log(req.body);

        const query = {
            name: 'delete-contact',
            text: 'DELETE FROM contacts WHERE owner_id = $1 AND owner_contact_id = $2',
            values: [req.session.user_id, req.body.contactId]
        };
        pool.query(query, function(err, result) {
            let deleteContactSuccess = true;
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);
                deleteContactSuccess = false;
            }

            // Log this to the console for debugging purposes.
            // console.log("Back from DB with result:");
            // console.log(result);

            res.json({success: deleteContactSuccess});
        });
    }
};