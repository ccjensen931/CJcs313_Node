INSERT INTO users VALUES (nextval('users_s1'), 'Admin', 'Admin', 'Admin@admin.com', 'Mr.', 'Admin');
INSERT INTO users VALUES (nextval('users_s1'), 'Admin2', 'Admin', 'Admin2@admin.com', 'Mr.', 'Admin');
INSERT INTO users VALUES (nextval('users_s1'), 'Test', 'Test1', 'Test@test.com', 'Mr.', 'Test');
INSERT INTO users VALUES (nextval('users_s1'), 'Test2', 'Test2', 'Test2@test.com', 'Mr.', 'Test');

INSERT INTO contacts VALUES (nextval('contacts_s1'), 1, 2);
INSERT INTO contacts VALUES (nextval('contacts_s1'), 2, 1);

INSERT INTO messages VALUES (nextval('message_s1'), 1, 2, 'Unread Test', 'This is a test unread message to Admin', FALSE, FALSE, FALSE);
INSERT INTO messages VALUES (nextval('message_s1'), 1, 2, 'Read Test', 'This is a test read message to Admin', TRUE, FALSE, FALSE);
INSERT INTO messages VALUES (nextval('message_s1'), 2, 1, 'Test', 'This is a test message from Admin', TRUE, FALSE, FALSE);