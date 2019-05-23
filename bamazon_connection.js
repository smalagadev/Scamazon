const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'docker',
  database: 'bamazon_db'
});

// Conncect to bamazon_db
connection.connect(function(err){
  if(err){ throw err; }
  console.log('Connected to bamazon_db');
});

module.exports = {
  mysql: mysql,
  inquirer: inquirer,
  connection: connection
}
