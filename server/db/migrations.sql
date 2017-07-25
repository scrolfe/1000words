CREATE DATABASE one_thousand_words;

\c one_thousand_words

CREATE TABLE users (id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  password VARCHAR(255),
  contact_info VARCHAR(255),
  bio TEXT,
  photo_url VARCHAR(255));

CREATE TABLE reactions (id SERIAL PRIMARY KEY,
  reader_id INTEGER REFERENCES users(id),
  writer_id INTEGER REFERENCES users(id));

CREATE TABLE messages (id SERIAL PRIMARY KEY,
  subject VARCHAR(255),
  body TEXT,
  recipient_id INTEGER REFERENCES users(id),
  sender_id INTEGER REFERENCES users(id));

INSERT INTO users (email, password, contact_info, bio, photo_url) VALUES ('sam@sam.com', 'sam', 'find me at facebook.com/self', 'test bio plus 994 more words', '#');

INSERT INTO users (email, password, contact_info, bio, photo_url) VALUES ('sam1@sam.com', 'sam1', 'best found at twitter.com/myself', 'test bio plus 993 more words lol', '#');

INSERT INTO messages (subject, body, recipient_id, sender_id) VALUES ('welcome', 'welcome to the app', 1, 2);

INSERT INTO reactions (reader_id, writer_id) VALUES ('1', '2');

-- INSERT INTO reactions (reader_id, writer_id) VALUES ('2', '1');
