CREATE TABLE users
(
    user_id                     INTEGER,
    username                    VARCHAR(50)         CONSTRAINT nn_users_1 NOT NULL,
    user_password               VARCHAR(255)        CONSTRAINT nn_users_2 NOT NULL,
    email                       VARCHAR(100)        CONSTRAINT nn_users_3 NOT NULL,
    first_name                  VARCHAR(50)         CONSTRAINT nn_users_4 NOT NULL,
    last_name                   VARCHAR(50)         CONSTRAINT nn_users_5 NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY(user_id)
);

CREATE SEQUENCE users_s1 START WITH 1;
CREATE UNIQUE INDEX users_idx1 ON users(username);
CREATE UNIQUE INDEX users_idx2 ON users(email);

--------------------------------------------------------------------------------

CREATE TABLE contacts
(
    contact_id                  INTEGER,
    owner_id                    INTEGER             CONSTRAINT nn_contacts_1 NOT NULL,
    owner_contact_id            INTEGER             CONSTRAINT nn_contacts_2 NOT NULL,
    CONSTRAINT pk_contacts PRIMARY KEY(contact_id),
    CONSTRAINT fk_contacts_owner FOREIGN KEY(owner_id) REFERENCES users(user_id),
    CONSTRAINT fk_contacts_owner_contact FOREIGN KEY(owner_contact_id) REFERENCES users(user_id) 
);

CREATE SEQUENCE contacts_s1 START WITH 1;
CREATE UNIQUE INDEX contacts_idx1 ON contacts(owner_id, owner_contact_id);

--------------------------------------------------------------------------------

CREATE TABLE messages
(
    message_id                  INTEGER,
    subject_text                VARCHAR(200)        CONSTRAINT nn_messages_3 NOT NULL,
    message_text                VARCHAR(1000)       CONSTRAINT nn_messages_4 NOT NULL,
    message_read                BOOLEAN             CONSTRAINT nn_messages_5 NOT NULL,
    CONSTRAINT pk_messages PRIMARY KEY(message_id)
);

CREATE SEQUENCE message_s1 START WITH 1;

--------------------------------------------------------------------------------

CREATE TABLE message_sent
(
    message_sent_id             INTEGER,
    message_id                  INTEGER             CONSTRAINT nn_message_sent_1 NOT NULL,
    sender_id                   INTEGER             CONSTRAINT nn_message_sent_2 NOT NULL,
    CONSTRAINT pk_message_sent PRIMARY KEY(message_sent_id),    
    CONSTRAINT fk_message_sent_sender FOREIGN KEY(sender_id) REFERENCES users(user_id),
    CONSTRAINT fk_message_sent_message FOREIGN KEY(message_id) REFERENCES messages(message_id)
);

CREATE SEQUENCE message_send_s1 START WITH 1;

--------------------------------------------------------------------------------

CREATE TABLE message_received
(
    message_received_id         INTEGER,
    message_id                  INTEGER             CONSTRAINT nn_message_sent_1 NOT NULL,
    recipient_id                INTEGER             CONSTRAINT nn_message_sent_2 NOT NULL,
    CONSTRAINT pk_message_received PRIMARY KEY(message_received_id),    
    CONSTRAINT fk_message_sent_recipient FOREIGN KEY(recipient_id) REFERENCES users(user_id),
    CONSTRAINT fk_message_sent_message FOREIGN KEY(message_id) REFERENCES messages(message_id)
);

CREATE SEQUENCE message_receive_s1 START WITH 1;