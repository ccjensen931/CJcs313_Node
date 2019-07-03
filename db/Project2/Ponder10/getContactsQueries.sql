SELECT u.username
FROM users u JOIN contacts c
	ON u.user_id = c.owner_contact_id
WHERE c.owner_id = 1;

--------------------------------------------------------------------------------

SELECT u.username
FROM users u JOIN contacts c
	ON u.user_id != c.owner_contact_id
WHERE c.owner_id = 1 AND u.user_id != 1;