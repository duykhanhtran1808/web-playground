const fs = require('fs');
var request = require('request');
const readline = require('readline');

let links = []

const readInterface = readline.createInterface({
    input: fs.createReadStream('link.txt'),
    console: false
});

readInterface.on('line', function(line) {
    links.push(line)
});

readInterface.on('close', function() {
    console.log(links.length);
    
    var download = function(url, dest, callback){

        request.get(url)
        .on('error', function(err) {console.log(err)} )
        .pipe(fs.createWriteStream(dest))
        .on('close', callback);
    
    };
    
    links.forEach( function(str) {
        var filename =  str.split('/').pop();
        console.log('Downloading ' + filename);
        download(str, filename, function(){console.log('Finished Downloading' + filename)});
    });
    
});
