var fs = require('fs');



var file = fs.createReadStream('README.md');

var destFile = fs.createWriteStream('destination.md');



file.pipe(destFile);



file.on('end', function(){

    destFile.end('Finished!');


});