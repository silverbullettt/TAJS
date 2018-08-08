//require('./buggy');

exports.add = function(a, b) { return a + b; }

exports.factorial = function(n) {
    var result = 1;
    while (n >= 1) {
        result *= n;
        --n;
    }
    return result;
}

exports.buggy = function() {
    // A function containing some type errors.
    var x;
    var y;
    y = x.f;

    var n = 1;
    n.foo();
}

var a;
var b;

b = a.f;

//var buggy = require('./buggy');
