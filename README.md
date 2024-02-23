# HTTP File Downloader

This Node.js application downloads a file from a specified URL and saves it to a local filesystem.

## Usage

To use this application, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies using npm.
3. Run the application with the following command: 
```node app.js <url> <filepath>```

Replace `<url>` with the URL of the file you want to download and `<filepath>` with the path where you want to save the downloaded file.

## Features

- Takes a URL and a file path as command-line arguments.
- Checks for valid input format.
- Checks if the specified file already exists.
- Provides an option to override the existing file or exit the program.
- Downloads the file from the specified URL.
- Saves the downloaded file to the local filesystem.
- Prints a message upon completion indicating the size of the downloaded file and its location.

## Instructions

1. Ensure Node.js is installed on your system.
2. Open a terminal or command prompt.
3. Navigate to the directory where the application is located.
4. Run the application using the command mentioned in the "Usage" section.

## Dependencies

- fs: File system module in Node.js.
- readline: Readline module for reading user input from the command line.
- requestFunction: Custom module for handling HTTP requests.
- constants: Module containing constant values such as URL and file path.

## Contributors

- Jose Eduardo Payamps
