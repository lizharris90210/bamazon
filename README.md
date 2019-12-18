# Bamazon

## Description
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents two interfaces: customer and manager.

## MySQL Database Setup
In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in Bamazon.sql. Run this code inside your MySQL client like Sequel Pro to populate the database, then you will be ready to proceed with running the Bamazon customer and manager interfaces.

## Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

git clone git@github.com:lizharris90210/bamazon.git
cd bamazon
npm install
node bamazonCustomer.js
The customer interface presents a list of options:

Lizs-MacBook-Pro:bamazon Liz$ node bamazonCustomer.js 
111 | Noodles for Poodles | Pets | 5
125 | Fox in Socks | Books | 12
345 | Pink Mink Ink | Office Supplies | 17
456 | Wally Ball Wall | Toys | 250
929 | Knitting Mitts | Books | 14
238 | Ham and Eggs (Green) | Grocery | 9
985 | Bread, said Fred | Music | 12
856 | Spaghetti Confetti | Novelty | 8
666 | Deviling Your Life | Books | 19
42 | The Answer to all Things | Books | 42
? What item would you like to purchase? _

This allows the user to view the store items: item IDs, descriptions, department, and price. Type in the ID number to choose a product and hit 'enter'. The database updates and tells you 'you got it' if the transaction goes through.

Bamazon Demo LINK