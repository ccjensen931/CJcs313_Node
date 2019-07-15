-- Delete Messages
DELETE FROM messages WHERE sender_delete = TRUE AND recipient_delete = TRUE;

--------------------------------------------------------------------------------

-- Delete User Accounts
DELETE FROM users WHERE delete_account = TRUE;