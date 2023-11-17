CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    email varchar NOT NULL UNIQUE,
    first_name varchar NOT NULL,
    last_name varchar NOT NULL,
    password varchar NOT NULL
);
INSERT INTO users (username, email, first_name, last_name, password)
VALUES ('dan0m1', 'bohdan.shevchenko182@gmail.com', 'Bohdan', 'Shevchenko', 'password2332')