/* Program: index.js
 * The program asks the user for input and then lists all the elements in the array
 * It also provides a functionality of user quitting the program when needed
 * Author: Salim J. Kachemela <sakachemela@gmail.com>
 * Date: 02/02/2019
 */

// importing the required module for getting console input
const input = require('node-console-input');

console.log("\nWelcome to the Shopping list Game:\n");

const items = []; // initialize an empty array for storing the numbers

while(true) {
  let message = input.getConsoleInput("Please enter your shopping list (Q to Quit): ");

  // check if the value entered is q
  if(message === 'q'.toLowerCase()) {
    break;
  } else {
    items.push(message);
  }
}

// Check if the shopping list has items in it
if (items.length > 0) {
  console.log("\nHere is your Shopping list:")
  console.log(items.join(", "));
} else if(items.length === 0) {
  console.log("\nAre you not buying anying today?");
}
