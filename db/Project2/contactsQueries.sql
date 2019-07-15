
-- Get Available Contacts
SELECT DISTINCT u.username
FROM users u
WHERE u.user_id NOT IN 
	(SELECT user_id
	FROM users JOIN contacts c
		ON u.user_id = c.owner_contact_id
	WHERE c.owner_id = 1)
	AND u.user_id != 1 AND u.delete_account = FALSE;

--------------------------------------------------------------------------------

--Get Current Contacts
SELECT u.user_id, u.username, u.first_name, u.last_name 
FROM users u JOIN contacts c 
	ON u.user_id = c.owner_contact_id 
WHERE c.owner_id = 1;

--------------------------------------------------------------------------------

-- Add Contact
INSERT INTO contacts VALUES (nextval('contacts_s1'), $1, (SELECT u.user_id FROM users u WHERE u.username = $2));

--------------------------------------------------------------------------------

-- Delete Contact
DELETE FROM contacts WHERE owner_id = $1 AND owner_contact_id = $2