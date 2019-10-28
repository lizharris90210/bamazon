var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_db"
});

// Error
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

start();

// Prompt for ID of product
function start() {
  inquirer
  .prompt([
    {
      name: "item_id",
      type: "input",
      message: "What is the Item ID number of the item you would like to purchase?"
    },
    {
      // Prompt for unit quantity
      name: "quantity",
      type: "input",
      message: "How many would you like?"
    }
  ]);
  then(function(answer) {
// Once order placed, check to see if enough product in stock to fill order- 
  queryItemID();
      if (answer.item_id > stock_quantity) {
          // if not console log "insufficient quantity!" then prevent order-
        console.log("Insufficient inventory for quantity specified");
        } else {
// if products available, fulfill order by updating sql DB for remaining quantity-
      if (answer.item_id > stock_quantity) {
          // Update SQL quantites
        };
        };
      });
    
      

// customer input item_id search
function queryItemID() {
    connection.query("SELECT * FROM item_id", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
      }
    });
  }
 

// show customer the cost of purchase

}