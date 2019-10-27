-- Seeds

DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id INTEGER(10),
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price INTEGER(10),
    stock_quantity INTEGER(10)
);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (0000000001, "Noodles for Poodles", "Pets", 5, 25);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (0000000025, "Fox in Socks", "Books", 12, 42);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (0000000345, "Pink Mink Ink", "Office Supplies", 17, 20);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (0004560001, "Wally Ball Wall", "Toys", 250, 32);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (2900000029, "Knitting Mitts", "Books", 14, 8);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (0045238001, "Ham and Eggs (Green)", "Grocery", 9, 90);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (0000094185, "Bread, said Fred", "Music", 12, 39);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (0038561042, "Spaghetti Confetti", "Novelty", 8, 12);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (0000666000, "Deviling Your Life", "Books", 19, 45);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (0000000042, "The Answer to all Things", "Books", 42, 42);

