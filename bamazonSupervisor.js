const bamazon = require("./bamazon_connection.js");
const sql = bamazon.connection;
const inquirer = bamazon.inquirer;

inquirer.prompt([
  {
    name: 'option',
    type: 'list',
    message: 'What would you like to do?',
    choices: ['View Product Sales by Department', 'Create New Department']
  }
]).then(function(action){
    if(action.option == 'View Product Sales by Department'){
      query = `SELECT * FROM Departments`;
      sql.query(query, function(err, res){
        console.log(`Dept. ID\tDept. Name\t\t Over Head Costs `);
        res.forEach(data => {
          console.log(`${data.department_id}\t\t${data.department_name}\t\t${data.over_head_costs}`);
        });

      });

    }
    if(action.option == 'Create New Department'){
      inquirer.prompt([
        {
          name: 'name',
          message: 'Department name:',
        },
        {
          name: 'over_head_costs',
          message: 'Over head costs:',
        }
      ]).then(function(department){
        query = `INSERT INTO Departments (department_name, over_head_costs) VALUES('${department.name}', ${department.over_head_costs});`;
        sql.query(query, function(err, res){
          console.log('Department added!');
        });
      });
    }
});
