-- Get inbox
SELECT m.message_id, m.subject_text, u.username, m.message_read
FROM messages m JOIN users u
	ON m.sender_id = u.user_id
WHERE m.recipient_id = 1 AND m.recipient_delete = FALSE;

--------------------------------------------------------------------------------

-- Get message
SELECT message_text
FROM messages
WHERE message_id = 1;

--------------------------------------------------------------------------------

-- Get outbox
SELECT m.message_id, m.subject_text, u.username, m.message_read
FROM messages m JOIN users u
	ON m.recipient_id = u.user_id
WHERE m.sender_id = 1 AND m.sender_delete = FALSE;

--------------------------------------------------------------------------------

-- Send Message
INSERT INTO messages VALUES (nextval('message_s1'), $1, $2, $3, $4, $5, $6, $7);

--------------------------------------------------------------------------------

-- Delete Message
UPDATE messages SET sender_delete = true WHERE message_id = $1;
UPDATE messages SET recipient_delete = true WHERE message_id = $1;

--------------------------------------------------------------------------------

-- Update Message read
UPDATE messages SET message_read = true WHERE message_id = $1;