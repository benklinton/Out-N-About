DROP DATABASE IF EXISTS OutNAboutdb;

CREATE DATABASE OutNAboutdb;

USE OutNAboutdb;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    product_category VARCHAR(42) NULL,
    product_description VARCHAR(1000) NULL,
    product_image_link VARCHAR (500) NULL,
    price DECIMAL (6,2),
    quanity INT(10),
    PRIMARY KEY (id)
);

