/*
1 - Take first argument as the url
2 - Take second argument as the file path
3 - Create a function that takes the url and downloads it to the specified local file path in the machine
3a - Take an HTTP request and wait for the response
3b - After the HTTP request is completed, take  the data and write it to the local filesystem

4 - Upon comepletion, print a message similar to this:Downloaded and saved 1235 bytes to ./index.html.

*/

const request = require('request');
const input = process.argv.slice(2)

let url;
let filePath;

//Take the separate inputs (URL and Filepath from the user)
for (let i = 0; i < input.length; i++) {
  url = input[0];
  filePath = input[1];
}
request(`${url}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});