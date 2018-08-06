
const fs = require('fs');

const path ='test-nodejs-fs.js';
fs.open(path, 'r', (err, fd) => {
    if (err) {
        console.log('Open "' + path + '" fails, err: ' + err);
    } else {
        console.log('Open "' + path + '" successed');
    }
});

