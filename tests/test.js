// TODO: implement the tests
console.log("Tests are not implemented yet...");

const { exec } = require('child_process');

out = exec('ls ~/');
out.stdout.on('data', function(data) {
    console.log(data); 
});
