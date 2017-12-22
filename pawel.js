const path = require('path');
const os = require('os');
const fs = require('fs');
const recursive = require("recursive-readdir");


let czytajKatalog = (topDirectory) => {
    return new Promise((resolve, reject) => {
            recursive(topDirectory, function (err, files) {
                resolve(files)
            })
        }
    )
};

czytajKatalog("D://data")
    .then((files) => {
       files.forEach((file) => {
           let dlugosc = file.split('\\').length;
           let nazwaZbioru = file.split('\\')[dlugosc-1];
            fs.appendFileSync('dane.txt', file + os.EOL)
        })
    });

