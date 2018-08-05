
function add(a, b) {
    return a + b;
}

function accessUndefinedProp() {
    var o1 = undefined;
    var o2 = {};
    o2.p = o1.q;
}

var ten = 10;

exports.add = add;

exports.accessUndefinedProp = accessUndefinedProp;

exports.ten = ten;
