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
      .prompt({
        name: "postOrBid",
        type: "list",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID", "EXIT"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid === "POST") {
          postAuction();
        }
        else if(answer.postOrBid === "BID") {
          bidAuction();
        } else{
          connection.end();
        }
      });
  }

// customer input item_id search
function queryItemID() {
    connection.query("SELECT * FROM item_id", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
      }
    });
  }
 
// Prompt for unit quantity
function orderPrompt() {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: "item id",
          type: "input",
          message: "What is the Item ID number of the item you would like to purchase?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like?"
        },
        {
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO auctions SET ?",
          {
            item_name: answer.item,
            category: answer.category,
            starting_bid: answer.startingBid || 0,
            highest_bid: answer.startingBid || 0
          },
          function(err) {
            if (err) throw err;
            console.log("Your auction was created successfully!");
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  }
// Once order placed, check to see if enough product in stock to fill order- 
// if not console log "insufficient quantity!" then prevent order-
// if products available, fulfill order by updating sql DB for remaining quantity-
// show customer the cost of purchase

  