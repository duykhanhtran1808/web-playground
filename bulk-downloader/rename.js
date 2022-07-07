const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, './output');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
files.forEach(file => rename(
  imageDirPath + `/${file}`,
  imageDirPath + `/${file}.jpg`,
  err => console.log(err)
));