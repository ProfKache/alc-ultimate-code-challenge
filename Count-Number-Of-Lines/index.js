/* Program: index.js
 * The program reads from a file and then counts the number of lines that file
 * Author: Salim J. Kachemela <sakachemela@gmail.com>
 * Date: 14/02/2019
 */

// importing the module
const fs = require('fs');

// reading the file contents
fs.readFile('languages.txt', 'utf8', (err, data) => {  
  if (err) throw err;

  data = data.trim(); // remove the empty string at the end of the file
  data_list = data.split('\n');
  let numberOfLines = data_list.length; // finding the number of lines
  console.log(`The file 'languages.txt' has ${numberOfLines} lines`);
  console.log("It has the following contents: "); 
  console.log(data);
});

