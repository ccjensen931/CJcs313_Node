const pool = require('../../general_modules/dbConnect.js');

module.exports = {
    getInbox: function(req, res) {
        const query = {
            name: 'get-inbox',
            text: 'SELECT m.message_id, m.subject_text, u.username, m.message_read, m.recipient_delete FROM messages m JOIN users u ON m.sender_id = u.user_id WHERE m.recipient_id = 1;',
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
            values: [req.query.messageId]
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
            text: 'SELECT m.message_id, m.subject_text, u.username, m.message_read, m.sender_delete FROM messages m JOIN users u ON m.recipient_id = u.user_id WHERE m.sender_id = 1;',
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
    sendMessage: function(req, res) {
        console.log("Send Message!");
        console.log(req.body);
    },
    deleteMessage: function(req, res) {
        const query = {
            name: 'delete-message',
            text: 'DELETE FROM messages WHERE message_id = $1',
            values: [req.body.messageId]
        };
        const queryReceived = {
            name: 'delete-message-received',
            text: 'DELETE FROM message_received WHERE message_id = $1',
            values: [req.body.messageId]
        };
        const querySent = {
            name: 'delete-message-sent',
            text: 'DELETE FROM message_sent WHERE message_id = $1',
            values: [req.body.messageId]
        };

        if (req.body.table == "received") {
            console.log(queryReceived);
            // pool.query(queryReceived, function(err, result) {
            //     // If an error occurred...
            //     if (err) {
            //         console.log("Error in query: ")
            //         console.log(err);
            //     }

            //     console.log("Back from DB with result:");
            //     console.log(result);

            //     res.json({deleted: result});
            // });
        } else if (req.body.table == "sent") {
            console.log(querySent);
            // pool.query(querySent, function(err, result) {
            //     // If an error occurred...
            //     if (err) {
            //         console.log("Error in query: ")
            //         console.log(err);
            //     }

            //     console.log("Back from DB with result:");
            //     console.log(result);

            //     res.json({deleted: result});
            // });
        }

        console.log(query);
        // pool.query(query, function(err, result) {
        //     // If an error occurred...
        //     if (err) {
        //         console.log("Error in query: ")
        //         console.log(err);
        //     }   

        //     // Log this to the console for debugging purposes.
        //     console.log("Back from DB with result:");
        //     console.log(result);

        //     res.json({deletedMessage: result});
        // });
    }
};