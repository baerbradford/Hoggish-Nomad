var exec = require('child_process').exec;

exec('NODE_ENV=production PORT=80 grunt > grunt.log',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
           console.log('exec error: ' + error);
        }
});