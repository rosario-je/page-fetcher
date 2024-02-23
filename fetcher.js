/*
1 - Take first argument as the url
2 - Take second argument as the file path
3 - Create a function that takes the url and downloads it to the specified local file path in the machine
3a - Take an HTTP request and wait for the response
3b - After the HTTP request is completed, take  the data and write it to the local filesystem

4 - Upon comepletion, print a message similar to this:Downloaded and saved 1235 bytes to ./index.html.

*/

const fs = require('fs');
const readline = require('readline')
const pageDownload = require('./requestFunction')
const { url, filePath} = require('./constants')

/*--Edge Cases--*/

//Check for valid input format
if (process.argv.length !== 4) {
  console.log("Provide the following format: <url> <filepath>")
  process.exit();
}
if (fs.existsSync(filePath)) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("File already exists. Would you like to override? Press y(yes) or n(no)", function (answer) {
    if (answer.toLowerCase() === 'y') {
      console.log("Overriding the file...");
      pageDownload();
    } else if (answer.toLowerCase() === 'n') {
      console.log("Exiting without overriding.");
      rl.close();
    } else {
      console.log("Invalid input. Please press y for yes or n for no.");
      rl.close();
    }
  });
} else {
  console.log("File does not exist");
  pageDownload();
}
