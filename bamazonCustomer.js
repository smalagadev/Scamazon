const bamazon = require("./bamazon_connection.js");
const sql = bamazon.connection;
const inquirer = bamazon.inquirer;

// query will be changed with each use case.
let query;

// Inquirerer prompting for an item ID and a quantity.
inquirer.prompt([
  {
    _: true,
    name: "id",
    message: "Enter the ID of the product you would like to buy."
  }, {
    name: "quantity",
    message: "How many would you like to buy?"
  }
]).then(function(purchase) {
  // Set query to read from database.
  query = `SELECT * FROM Products WHERE item_id=${purchase.id}`;

  // Run query and run Inquirer response logic in callback.
  sql.query(query, function(err, res){
    const item = res[0];

    if(purchase.quantity < item.stock_quantity){
      console.log(`Purchasing ${item.product_name} quantity of ${purchase.quantity}.`);

      // Set query to update database.
      query = `UPDATE Products SET stock_quantity = ${item.stock_quantity - purchase.quantity} WHERE item_id = ${item.item_id};`


      // Update Database
      sql.query(query);

      const sale = parseFloat(item.price * purchase.quantity).toFixed(2);
      query = `UPDATE Products SET product_sales = ${sale} WHERE item_id = ${item.item_id};`;

      sql.query(query);

      // Return Price to customer
      console.log(`Your total is $${sale}.`);
    }
    else{
      console.log(`Low on stock, there are only ${item.stock_quantity} left.`);
    }
  });
});
