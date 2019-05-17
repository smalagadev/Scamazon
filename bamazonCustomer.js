const inquirer = require('inquirer');


// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
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
  // initializes the variable newProgrammer to be a programmer object which will take
  // in all of the user's answers to the questions above
  if(purchase.quantity/* < inventory.stock*/)
  {
    console.log(`Purchasing ${purchase.quantity} of ${purchase.id}`);
  }
  else
  {
    console.log(`Low on stock, there are only ${inventory.stock} left.`);
  }

});
