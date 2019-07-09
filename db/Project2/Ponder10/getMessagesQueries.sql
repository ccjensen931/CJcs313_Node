-- SELECT m.message_id, m.subject_text, u.username, m.message_read
-- FROM messages m JOIN message_received r
-- 	ON m.message_id = r.message_id
-- JOIN message_sent s
-- 	ON m.message_id = s.message_id
-- JOIN users u
-- 	ON s.sender_id = u.user_id
-- WHERE r.recipient_id = 1;

SELECT m.message_id, m.subject_text, u.username, m.message_read
FROM messages m JOIN users u
	ON m.sender_id = u.user_id
WHERE m.recipient_id = 1;

--------------------------------------------------------------------------------

SELECT message_text
FROM messages
WHERE message_id = 1;

--------------------------------------------------------------------------------

-- SELECT m.message_id, m.subject_text, u.username, m.message_read
-- FROM messages m JOIN message_received r
-- 	ON m.message_id = r.message_id
-- JOIN message_sent s
-- 	ON m.message_id = s.message_id
-- JOIN users u
-- 	ON r.recipient_id = u.user_id
-- WHERE s.sender_id = 1;

SELECT m.message_id, m.subject_text, u.username, m.message_read
FROM messages m JOIN users u
	ON m.recipient_id = u.user_id
WHERE m.sender_id = 1;