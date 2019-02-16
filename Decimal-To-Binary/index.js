/* Program: index.js
 * The program accepts a base 10 from the command line and outputs its binary representation.
 * Author: Salim J. Kachemela <sakachemela@gmail.com>
 * Date: 14/02/2019
 */

// loading the required module
const input = require('node-console-input');

console.log('Welcome to number system converter');
console.log('Decimal -> Binary');

let number = parseInt(input.getConsoleInput('Enter the number to convert: '));
const userNumber = number;

// array to store the remainders
let remainders = []; 

while(number > 0) {
  let remainder = number % 2; // remainder of division by 2
  remainders.unshift(remainder); // keep track of the remainders
  number = Math.floor(number / 2);
}

console.log(`${userNumber} to binary is ${remainders.join("")}`);
