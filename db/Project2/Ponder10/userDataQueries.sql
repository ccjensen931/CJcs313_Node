-- Login
SELECT u.user_id, u.user_password FROM users u WHERE u.username = $1;

--------------------------------------------------------------------------------

-- Get username
SELECT username FROM users WHERE user_id = $1;

--------------------------------------------------------------------------------

-- Get user's realname
SELECT first_name, last_name FROM users WHERE user_id = $1;

--------------------------------------------------------------------------------

-- Login
SELECT u.user_id, u.user_password FROM users u WHERE u.username = $1;

--------------------------------------------------------------------------------

-- Get user's email
SELECT u.email FROM users u WHERE u.user_id = $1;

--------------------------------------------------------------------------------

-- Get user's password
SELECT u.user_password FROM users u WHERE u.user_id = $1;

--------------------------------------------------------------------------------

-- Get user's password
SELECT u.user_password FROM users u WHERE u.user_id = $1;

--------------------------------------------------------------------------------

-- Check email availability
SELECT u.user_id FROM users u WHERE u.email = $1;

--------------------------------------------------------------------------------

-- Update email
UPDATE users SET email = $1 WHERE user_id = $2;

--------------------------------------------------------------------------------

-- Update first name
UPDATE users SET first_name = $1 WHERE user_id = $2;

--------------------------------------------------------------------------------

-- Update last name
UPDATE users SET last_name = $1 WHERE user_id = $2;

--------------------------------------------------------------------------------

-- Delete account
UPDATE users SET delete_account = TRUE WHERE user_id = $1;