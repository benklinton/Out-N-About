DROP DATABASE IF EXISTS OutNAboutdb;

CREATE DATABASE OutNAboutdb;

USE OutNAboutdb;

CREATE TABLE Products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    product_category VARCHAR(42) NULL,
    product_description VARCHAR(1000) NULL,
    product_image VARCHAR (500) NULL,
    price DECIMAL (6,2),
    seller_name INT(10),
    seller_number INT(10),
    PRIMARY KEY (id)
);

