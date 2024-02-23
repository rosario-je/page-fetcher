const request = require('request')
const { url, filePath } = require('./constants')
const fs = require('fs');

const pageDownload = () => {
  request(url, (error, response, data) => {
    // If error occurs, print the error
    if (error) console.log(error)

    // Printing status code //
    console.log(response.statusCode);
    fs.writeFile(filePath, data, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Downloaded and saved ${data.length} bytes to ${filePath}`);
        process.exit();
      }
    })
  });
}

module.exports = pageDownload;