INSERT INTO users VALUES (nextval('users_s1'), 'Admin', 'Admin', 'Admin@admin.com', 'Mr.', 'Admin');
INSERT INTO users VALUES (nextval('users_s1'), 'Admin2', 'Admin', 'Admin2@admin.com', 'Mr.', 'Admin');

INSERT INTO contacts VALUES (nextval('contacts_s1'), 1, 2);
INSERT INTO contacts VALUES (nextval('contacts_s1'), 2, 1);

INSERT INTO messages VALUES (nextval('message_s1'), 'Unread Test', 'This is a test unread message to Admin', FALSE);
INSERT INTO messages VALUES (nextval('message_s1'), 'Read Test', 'This is a test read message to Admin', TRUE);
INSERT INTO messages VALUES (nextval('message_s1'), 'Test', 'This is a test message from Admin', TRUE);

INSERT INTO message_sent VALUES (nextval('message_send_s1'), 1, 2);
INSERT INTO message_sent VALUES (nextval('message_send_s1'), 2, 2);
INSERT INTO message_sent VALUES (nextval('message_send_s1'), 3, 1);

INSERT INTO message_received VALUES (nextval('message_receive_s1'), 1, 1);
INSERT INTO message_received VALUES (nextval('message_receive_s1'), 2, 1);
INSERT INTO message_received VALUES (nextval('message_receive_s1'), 3, 2);