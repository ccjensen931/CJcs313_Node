-- Get username
SELECT username FROM users WHERE user_id = $1;

--------------------------------------------------------------------------------

-- Get user's realname
SELECT first_name, last_name FROM users WHERE user_id = $1;

--------------------------------------------------------------------------------

-- Login
SELECT u.user_id, u.user_password FROM users u WHERE u.username = $1;

--------------------------------------------------------------------------------