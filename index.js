// длина от датчика до приемника 

// var sensorsLength = {
//     sens1 = "",
//     sens2 = "",
//     sens3 = ""
// };


var x = {
    a: 0,
    b: 18,
    c: 7.5
};
var y = {
    a: 0,
    b: 0,
    c: 16
};
var z = {
    a: 28.5,
    b: 0,
    c: 27
};

const readline = require('readline')

function test() {
    let q = []
    let w = []
    var p1 = -2 * x.a * w - 2 * x.b * q + Math.pow(x.a, 2) + Math.pow(x.b, 2) - Math.pow(x.c, 2)
    var p2 = -2 * y.a * w - 2 * y.b * q + Math.pow(y.a, 2) + Math.pow(y.b, 2) - Math.pow(y.c, 2)
    var p3 = -2 * z.a * w - 2 * z.b * q + Math.pow(z.a, 2) + Math.pow(z.b, 2) - Math.pow(z.c, 2)
    w = (p1 - p2) / (2 * x.b)
    q = -(p2 - p3) / (2 * z.a)
    return ("координата х = " + q + ", координата y = " + w)

}

console.log(test())