const pool = require('../../general_modules/dbConnect.js');

module.exports = {
    getInbox: function(req, res) {
        const query = {
            name: 'get-inbox',
            text: 'SELECT m.message_id, m.subject_text, u.username, m.message_text, m.message_read FROM messages m JOIN message_received r ON m.message_id = r.message_id JOIN message_sent s ON m.message_id = s.message_id JOIN users u ON s.sender_id = u.user_id WHERE r.recipient_id = 1;',
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

            res.json({messages: result.rows});
    });},
    getMessage: function(req, res) {
        const query = {
            name: 'get-message',
            text: 'SELECT message_text FROM messages WHERE message_id = $1',
            values: [req.body.messageId]
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
    
            res.json({message: result.rows});
        });},
    getOutbox: function(req, res) {
        const query = {
            name: 'get-outbox',
            text: 'SELECT m.message_id, m.subject_text, u.username, m.message_text, m.message_read FROM messages m JOIN message_received r ON m.message_id = r.message_id JOIN message_sent s ON m.message_id = s.message_id JOIN users u ON r.recipient_id = u.user_id WHERE s.sender_id = 1;',
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

            res.json({messages: result.rows});
    });}
};