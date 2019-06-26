CREATE TABLE ta10_person
(
    person_id           INTEGER,
    first_name          VARCHAR(50)        CONSTRAINT nn_person_1 NOT NULL,
    last_name           VARCHAR(50)        CONSTRAINT nn_person_2 NOT NULL,
    dob                 DATE               CONSTRAINT nn_person_3 NOT NULL,
    CONSTRAINT pk_person PRIMARY KEY(person_id)
);

CREATE SEQUENCE ta10_person_s1 START WITH 1;

----------------------------------------

CREATE TABLE ta10_parent_child
(
    parent_child_id     INTEGER,
    parent_id           INTEGER            CONSTRAINT nn_parent_child_1 NOT NULL,
    child_id            INTEGER            CONSTRAINT nn_parent_child_2 NOT NULL,
    CONSTRAINT pk_parent_child PRIMARY KEY(parent_child_id),
    CONSTRAINT fk_parent_child_1 FOREIGN KEY(parent_id) REFERENCES ta10_person(person_id),
    CONSTRAINT fk_parent_child_2 FOREIGN KEY(child_id) REFERENCES ta10_person(person_id)
);

CREATE SEQUENCE ta10_parent_child_s1 START WITH 1;

----------------------------------------

INSERT INTO ta10_person VALUES (nextval('ta10_person_s1'), 'Sean', 'Connery', '1930-08-25');
INSERT INTO ta10_person VALUES (nextval('ta10_person_s1'), 'Jason', 'Connery', '1963-01-11');

INSERT INTO ta10_parent_child VALUES (nextval('ta10_parent_child_s1'), 1, 2);