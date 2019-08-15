DROP DATABASE user_data;
CREATE DATABASE user_data;

USE user_data;

DROP TABLE IF EXISTS user_purchases;

CREATE TABLE user_purchases (
  /* Describe your table here.*/
  ID INT,
  USERNAME VARCHAR(50),
  EMAIL VARCHAR(100),
  USER_PASSWORD VARCHAR(64),
  ADDRESS1 VARCHAR(100),
  ADDRESS2 VARCHAR(50),
  CITY VARCHAR(50),
  US_STATE VARCHAR(50),
  ZIPCODE INT,
  PHONE_NUM INT,
  CARD_DATA INT,
  EXPIRES VARCHAR(10),
  CVV INT,
  BILLING_CODE INT,
  PRIMARY KEY (ID),
  UNIQUE KEY (EMAIL)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/