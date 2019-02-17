/* Program: index.js
 * The program converts temperature from Celcius to Fahrenheit
 * Author: Salim J. Kachemela <sakachemela@gmail.com>
 * Date: 14/02/2019
 */

// loading the required module
const input = require('node-console-input');

// pre-defined temperatures
const lowerLimitTemperature = 0;
const upperLimitTemperature = 100;

/* User input values and validations */
let startTemp = parseInt(input.getConsoleInput('Enter a start temperature: '));
while(startTemp < lowerLimitTemperature) {
  console.log(`Start temperature should not be less than ${lowerLimitTemperature}`);
  startTemp = parseInt(input.getConsoleInput('Re-enter start temperature: '));
}

let endTemp = parseInt(input.getConsoleInput('Enter an end temperature: '));
while(endTemp > upperLimitTemperature) {
  console.log(`End temperature should not exceed ${upperLimitTemperature}`);
  endTemp = parseInt(input.getConsoleInput('Re-enter end temperature: '));
}

let temperatureDifference = endTemp - startTemp;
let stepSize = parseInt(input.getConsoleInput('Enter the step size: '));
while (stepSize > temperatureDifference) {
  console.log(`The step size must not exceed ${temperatureDifference}`);
  stepSize = parseInt(input.getConsoleInput('Re-enter step size: '));
}

const temperatureObjectLists = [];
let fahrenheitTemp = 0;

for (let s = startTemp; s <= endTemp; s += stepSize) {
  fahrenheitTemp = ((9/5) * s) + 32;
  let temperatureObject = {'Celcius': s, 'Fahrenheit': fahrenheitTemp};
  temperatureObjectLists.push(temperatureObject);
}

console.table(temperatureObjectLists);
