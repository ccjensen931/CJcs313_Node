const pool = require('../../general_modules/dbConnect.js');

module.exports = {
    getInbox: function(req, res) {
        const query = {
            name: 'get-inbox',
            text: 'SELECT m.message_id, m.subject_text, u.username, m.message_read, m.recipient_delete FROM messages m JOIN users u ON m.sender_id = u.user_id WHERE m.recipient_id = $1 AND m.recipient_delete = FALSE;',
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

            res.json({messages: result.rows});
        });
    },
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
            // console.log("Back from DB with result:");
            // console.log(result.rows);
    
            res.json({message: result.rows});
        });
    },
    getOutbox: function(req, res) {
        const query = {
            name: 'get-outbox',
            text: 'SELECT m.message_id, m.subject_text, u.username, m.message_read, m.sender_delete FROM messages m JOIN users u ON m.recipient_id = u.user_id WHERE m.sender_id = $1 AND m.sender_delete = FALSE;',
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

            res.json({messages: result.rows});
        });
    },
    sendMessage: function(req, res) {
         const queryUserID = {
            name: 'get-recipient-id',
            text: 'SELECT u.user_id FROM users u WHERE username = $1',
            values: [req.body.recipientUsername]
        };

        pool.query(queryUserID, function(err, result) {
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);
            }   

            // Log this to the console for debugging purposes.
            // console.log("Back from DB with result:");
            // console.log(result.rows);

            if (result.rows[0].user_id) {
                const query = {
                    name: 'insert-message',
                    text: "INSERT INTO messages VALUES (nextval('message_s1'), $1, $2, $3, $4, $5, $6, $7);",
                    values: [result.rows[0].user_id, req.session.user_id, req.body.subject, req.body.content, false, false, false]
                };

                pool.query(query, function(err, result) {
                    let messageSendSuccessful = true;
                    // If an error occurred...
                    if (err) {
                        console.log("Error in query: ")
                        console.log(err);
                        messageSendSuccessful = false;
                    }
        
                    // Log this to the console for debugging purposes.
                    // console.log("Back from DB with result:");
                    // console.log(result);

                    res.json({success: messageSendSuccessful});
                });
            }
        });
    },
    deleteMessage: function(req, res) {
        const senderDeleteQuery = {
            name: 'delete-sender-message',
            text: 'UPDATE messages SET sender_delete = true WHERE message_id = $1;',
            values: [req.body.messageId]
        };
        const recipientDeleteQuery = {
            name: 'delete-recipient-message',
            text: 'UPDATE messages SET recipient_delete = true WHERE message_id = $1;',
            values: [req.body.messageId]
        };

        if (req.body.sender == "true") {
            pool.query(senderDeleteQuery, function(err, result) {
                // If an error occurred...
                if (err) {
                    console.log("Error in query: ")
                    console.log(err);
                    res.json({success: false});
                    return;
                }
    
                // Log this to the console for debugging purposes.
                // console.log("Back from DB with result:");
                // console.log(result);
                res.json({success: true});
            });
        } else if (req.body.sender == "false") {
            pool.query(recipientDeleteQuery, function(err, result) {
                // If an error occurred...
                if (err) {
                    console.log("Error in query: ")
                    console.log(err);
                    res.json({success: false});
                    return;
                }
    
                // Log this to the console for debugging purposes.
                // console.log("Back from DB with result:");
                // console.log(result);
                res.json({success: true});
            });
        }
    },
    updateMessageRead: function(req, res) {
        const query = {
            name: 'update-message-read',
            text: 'UPDATE messages SET message_read = true WHERE message_id = $1;',
            values: [req.body.messageId]
        };

        pool.query(query, function(err, result) {
            let updateSuccess = true;
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);
                updateSuccess = false;
            }

            // Log this to the console for debugging purposes.
            // console.log("Back from DB with result:");
            // console.log(result);
            res.json({success: updateSuccess});
        });
    }
};