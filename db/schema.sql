
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT null,

  burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);