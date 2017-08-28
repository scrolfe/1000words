
-- CREATE DATABASE thousand_words;
--
--\c thousand_words

CREATE TABLE users (id SERIAL PRIMARY KEY,
  display_name VARCHAR(255),
  email VARCHAR(255),
  password_digest VARCHAR(255),
  contact_info VARCHAR(255),
  bio TEXT,
  photo_url VARCHAR(255));

CREATE TABLE reactions (id SERIAL PRIMARY KEY,
  reader_id INTEGER REFERENCES users(id),
  writer_id INTEGER REFERENCES users(id));

CREATE TABLE friends (id SERIAL PRIMARY KEY,
  friend1_id INTEGER REFERENCES users(id),
  friend2_id INTEGER REFERENCES users(id));

-- ALTER TABLE users ADD COLUMN display_name VARCHAR(255);
