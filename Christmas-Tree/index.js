/* Program: index.js
 * The program displays a Chrismas Tree pattern
 * Author: Salim J. Kachemela <sakachemela@gmail.com>
 * Date: 16/02/2019
 */

// load the required module
require('colors');

let numberOfRows = 5;

for (let i = 1; i <= numberOfRows; i++) {
  for (let k = 1; k <= (numberOfRows - i); k++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" * ".rainbow);
  }
  console.log("\n");
}
