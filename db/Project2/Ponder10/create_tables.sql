CREATE TABLE users
(
    user_id                     INTEGER,
    username                    VARCHAR(50)         CONSTRAINT nn_users_1 NOT NULL,
    user_password               VARCHAR(255)        CONSTRAINT nn_users_2 NOT NULL,
    email                       VARCHAR(100)        CONSTRAINT nn_users_3 NOT NULL,
    first_name                  VARCHAR(50)         CONSTRAINT nn_users_4 NOT NULL,
    last_name                   VARCHAR(50)         CONSTRAINT nn_users_5 NOT NULL,
    delete_account              BOOLEAN             CONSTRAINT nn_users_6 NOT NULL,
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
    recipient_id                INTEGER             CONSTRAINT nn_messages_1 NOT NULL,
    sender_id                   INTEGER             CONSTRAINT nn_messages_2 NOT NULL,
    subject_text                VARCHAR(200)        CONSTRAINT nn_messages_3 NOT NULL,
    message_text                VARCHAR(1000)       CONSTRAINT nn_messages_4 NOT NULL,
    message_read                BOOLEAN             CONSTRAINT nn_messages_5 NOT NULL,
    sender_delete               BOOLEAN             CONSTRAINT nn_messages_6 NOT NULL,
    recipient_delete            BOOLEAN             CONSTRAINT nn_messages_7 NOT NULL,
    CONSTRAINT pk_messages PRIMARY KEY(message_id),
    CONSTRAINT fk_messages_recipient FOREIGN KEY(recipient_id) REFERENCES users(user_id),
    CONSTRAINT fk_messages_sender FOREIGN KEY(sender_id) REFERENCES users(user_id)
);

CREATE SEQUENCE message_s1 START WITH 1;