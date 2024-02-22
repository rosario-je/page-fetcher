/*
1 - Take first argument as the url
2 - Take second argument as the file path
3 - Create a function that takes the url and downloads it to the specified local file path in the machine
3a - Take an HTTP request and wait for the response
3b - After the HTTP request is completed, take  the data and write it to the local filesystem

4 - Upon comepletion, print a message similar to this:Downloaded and saved 1235 bytes to ./index.html.

*/

const fs = require('fs');
const fetch = require('node-fetch')
// const fs = require('node:fs/promises');

const input = process.argv.slice(2)

//Take the separate inputs (URL and Filepath from the user)
let url = input[0]
let filePath = input[1]

if (input.length < 2){
  console.log("Provide the following format: <url> <filepath>")
  process.exit();
}

async function downloadPage() {
  try {
    const response = await fetch(url);
    const data = await response.buffer(); // Get response body as a Buffer
    fs.writeFile(filePath, data, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Downloaded and saved ${data.length} bytes to ${filePath}`);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

downloadPage();