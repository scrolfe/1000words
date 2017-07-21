CREATE DATABASE one_thousand_words;

\c one_thousand_words

CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255), password VARCHAR(255), bio TEXT, photo_url VARCHAR(255));

CREATE TABLE messages (id SERIAL PRIMARY KEY, subject VARCHAR(255), body TEXT, recipient_id INTEGER REFERENCES users(id), sender_id INTEGER REFERENCES users(id));

INSERT INTO users (email, password, bio, photo_url) VALUES ('sam@sam.com', 'sam', 'test bio plus 994 more words', '#');

INSERT INTO users (email, password, bio, photo_url) VALUES ('sam1@sam.com', 'sam1', 'test bio plus 993 more words lol', '#');

INSERT INTO messages (subject, body, recipient_id, sender_id) VALUES ('welcome', 'welcome to the app', 1, 2);
