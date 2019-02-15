/* Program: index.js
 * The program takes input as a number and converts it into a word
 * Author: Salim J. Kachemela <sakachemela@gmail.com>
 * Date: 14/02/2019
 */

// load the required module
const numberToWords = require('number-to-words');
const input = require('node-console-input');

// display menu
console.log('Welcome to the number to word converter game (Q to Quit)')

// console.log(numberToWords.toWords(1200000000));
while(true) {
  let number = input.getConsoleInput('Enter a number: ');

  // check if the user entered Q
  if (number.toLowerCase() === 'q') {
    console.log('\nGood Bye!');
    break;
  }

  // convert the input to an int
  number = parseInt(number);
  console.log(`${number} -> ${numberToWords.toWords(number)}`);

}
