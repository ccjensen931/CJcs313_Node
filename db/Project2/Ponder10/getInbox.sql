SELECT m.message_id, m.subject_text, u.username, m.message_text, m.message_read
FROM messages m JOIN message_received r
	ON m.message_id = r.message_id
JOIN message_sent s
	ON m.message_id = s.message_id
JOIN users u
	on s.sender_id = u.user_id
WHERE r.recipient_id = 1;