/* Program: index.js
 * The program involves the user guessing a number and check if the number is high or low
 * Author: Salim J. Kachemela <sakachemela@gmail.com>
 * Date: 02/02/2019
 */

const input = require('node-console-input');

console.log("Welcome to the number guessing game!\n");

// Generating a random number between 0 and 10
const randomNumber = Math.floor(Math.random() * 11);

console.log("Guess a number between 0 - 10 (Q to Quit)");

const numbers = {
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
  5: "fifth",
  6: "sixth",
  7: "seventh",
  8: "last"
};

for(let numberOfTries = 1; numberOfTries <= 8; numberOfTries++) { 
  let guess = input.getConsoleInput(`Enter your ${numbers[numberOfTries]} guess: `);
  if (guess.toLowerCase() === 'q'){
    console.log("\nGood Bye!!!");
    break;
  }

  // convert the input into an integer/number
  guess = parseInt(guess);

  // check if guessed number is equal to random number, low, or high
  if(guess < randomNumber) {
    console.log("Low");
  } else if(guess > randomNumber) {
    console.log("High");
  } else if (guess === randomNumber) {
    console.log("\nCongrats!!!");
    console.log("You are right");
    break;
  }
 
  // display a message when the program ends
  if (numberOfTries === 8) {
    console.log("\nGame Over, thanks for playing!!!");
  }
}
