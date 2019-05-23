const bamazon = require("./bamazon_connection.js");
const sql = bamazon.connection;
const inquirer = bamazon.inquirer;

// query will be changed with each use case.
let query;

inquirer.prompt([
  {
    name: "option",
    type: "list",
    message: "What would you like to do?",
    choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
  }
]).then(function(action){
  if(action.option === 'View Products for Sale'){ //select
    query = `SELECT * FROM Products;`;
    sql.query(query, function(err, res){
      console.log(`Item ID\tProduct Name\t\tPrice\tQty`);
      res.forEach(row => { console.log(`${row.item_id}\t${row.product_name.length > 12 ? row.product_name : row.product_name.length < 6 ? row.product_name+='\t\t' : row.product_name+='\t'}\t${row.price}\t${row.stock_quantity}`); });
    });
  }else if(action.option === 'View Low Inventory'){ //lower than 5
    query = `SELECT * FROM Products WHERE stock_quantity < 5`;
    sql.query(query, function(err, res){
      if(res.length){
        console.log(`Item ID\tProduct Name\t\tPrice\tQty`);
        res.forEach(row => { console.log(`${row.item_id}\t${row.product_name.length > 12 ? row.product_name : row.product_name.length < 6 ? row.product_name+='\t\t' : row.product_name+='\t'}\t${row.price}\t${row.stock_quantity}`); });
      }
      else {
        console.log(`There is no low inventory. Everything is stocked up!`);
      }
    });
  }
  else if(action.option === 'Add to Inventory'){ //add to stock
    inquirer.prompt([
      {
        _: true,
        name: "id",
        message: "Enter the ID of the product to restock"
      }, {
        name: "quantity",
        message: "How many would you like to order?"
      }
    ]).then(function(order){
      sql.query(`SELECT * FROM Products WHERE item_id=${order.id}`, function(err, res){
        query = `UPDATE Products SET stock_quantity = ${parseInt(order.quantity) + res[0].stock_quantity } WHERE item_id=${order.id}`;
        sql.query(query, function(err, res){
          console.log('Inventory updated!');
        });
      });
    });
  }
  else if(action.option === 'Add New Product'){
    inquirer.prompt([
      {
        name: 'name',
        message: 'Product name: '
      },
      {
        name: 'department',
        message: 'Department: '
      },
      {
        name: 'price',
        message: 'Price: '
      },
      {
        name: 'stock',
        message: 'Quantity: '
      }
    ])
    .then(function(inserted){
      query = `INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES('${inserted.name}', '${inserted.department}', ${inserted.price}, ${inserted.stock});`;
      sql.query(query, function(err, res){
        console.log('Item added!');
      });
    });
  }
});
