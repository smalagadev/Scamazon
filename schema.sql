DROP DATABASE bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE Products(
	item_id INT UNIQUE AUTO_INCREMENT,

	product_name VARCHAR(30) NOT NULL,

	department_name VARCHAR(30) NOT NULL,

	price DOUBLE NOT NULL,

	stock_quantity INT NOT NULL,

  product_sales DOUBLE DEFAULT 0,

   PRIMARY KEY(item_id)
);


INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Febreeze', 'Cleaning', 3.99, 30);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Febreeze 3pk', 'Cleaning', 7.99, 25);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Mop', 'Cleaning', 6.99, 15);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Earphones', 'Electronics', 13.99, 40);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Keyboard', 'Electronics', 29.99, 10);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Mouse', 'Electronics', 19.99, 40);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Keyboard', 'Electronics', 29.99, 10);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Bluetooth Speaker', 'Electronics', 59.99, 20);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Premium Sunglasses', 'Clothing', 113.99, 10);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES('Baseball Hat', 'Clothing', 14.99, 100);

CREATE TABLE Departments(

	department_id INT UNIQUE AUTO_INCREMENT,

	department_name VARCHAR(30) NOT NULL,

	over_head_costs DOUBLE NOT NULL,

  total_profit DOUBLE DEFAULT 0,

  PRIMARY KEY(department_id)
);

INSERT INTO Departments (department_name, over_head_costs)
VALUES('Electronics', 1000.00);

INSERT INTO Departments (department_name, over_head_costs)
VALUES('Clothing', 800.00);

INSERT INTO Departments (department_name, over_head_costs)
VALUES('Cleaning', 150.00);

SELECT * FROM Departments;
