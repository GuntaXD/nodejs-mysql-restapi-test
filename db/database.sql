CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL auto_increment,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

describe employee;

INSERT INTO employee VALUES
    (1,"Joe", 1000),
    (2,"Henry", 2000),
    (3,"Sam", 2500),
    (4,"Max", 1500);