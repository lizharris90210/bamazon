// BONUS - MANAGER VIEW

// ADD NEW PRODUCT
function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        flavor: "Rocky Road",
        price: 3.0,
        quantity: 50
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }

// UPDATES PRODUCT
function updateProduct() {
    console.log("Updating all Rocky Road quantities...\n");
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          quantity: 100
        },
        {
          flavor: "Rocky Road"
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products updated!\n");
        // Call deleteProduct AFTER the UPDATE completes
        deleteProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }

// DELETES PRODUCT
function deleteProduct() {
    console.log("Deleting all strawberry icecream...\n");
    connection.query(
      "DELETE FROM products WHERE ?",
      {
        flavor: "strawberry"
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products deleted!\n");
        // Call readProducts AFTER the DELETE completes
        readProducts();
      }
    );
  }

// VIEW PRODUCTS FOR SALE- list every available item (item_id, product_name, department_name, price, stock_quantity)
// VIEW LOW INVENTORY- list every item with inventory less than 5 
// ADD TO INVENTORY- prompt to add more inventory to any item
