var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_db"
});

// Error
connection.connect(function(err) {
  if (err) throw err;
  start();
});

// Prompt for ID of product
function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

  printProducts(res);

  inquirer
    .prompt([
      {
        name: "whichItem",
        type: "input",
        message: "What item would you like to purchase?"
      },
      {
        name: "itemAmount",
        type: "input",
        message: "How many items would you like to purchase?"
      }
    ])
    .then(function(answer) {
      // search DB for item ID. if valid go to next question, if invalid, return "invalid item ID"
      connection.query("SELECT * FROM products WHERE ?", 
            [
              {
                item_id: answer.whichItem
              }
            ],
      function(err, product) {
        console.log(product)
        });
      // Once order placed, check to see if enough product in stock to fill order-
      "UPDATE products WHERE `item_id` = answer.whichItem"
      connection.query(
         if (stock_quantity - itemAmount <= stock_quantity) {
          } else {
            (stock_quantity - itemAmount > stock_quantity)
          }
        );
      }
    });      //   // if not console log "insufficient quantity!" then prevent order-
      //   console.log("Insufficient inventory for quantity specified");
      // } else {
      //   // if products available, fulfill order by updating sql DB for remaining quantity-
      //   if (answer.item_id > stock_quantity) {
      //     // Update SQL quantites
      //   }
      // }
      // end connection
      connection.end();
    
    });
  })

    function printProducts(res) {
        for (var i = 0; i < res.length; i++) {
          console.log(
            res[i].item_id +
              " | " +
              res[i].product_name +
              " | " +
              res[i].department_name +
              " | " +
              res[i].price
          );
        }
    }
  
  // show customer the cost of purchase
}
