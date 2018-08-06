const math = require('./math.js');

var n = math.add(1, 2);
console.log(n);

n = math.factorial(5);
console.log(n);

math.buggy();
