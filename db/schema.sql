DROP DATABASE IF EXISTS theemoplyeemanager_db;
CREATE DATABASE theemoplyeemanager_db;

USE theemoplyeemanager_db;

CREATE TABLE department (
    id int primary key auto_increment,
    name VARCHAR(50) not null
)