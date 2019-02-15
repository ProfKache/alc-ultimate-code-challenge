/* Program: index.js
 * The program takes the file name as an input and then it find the size of the file in bytes
 * Author: Salim J. Kachemela <sakachemela@gmail.com>
 * Date: 15/02/2019
 */

// Load the fs module
const fs = require('fs');

fs.stat('languages.txt', (err, stats) => {
  if (err) {
    console.error(err); // Display the error message in case an error occurs
    return;
  }

  // get the size of file in bytes using the 'size' property
  console.log(`The file 'languages.txt' has ${stats.size} bytes`);

});
