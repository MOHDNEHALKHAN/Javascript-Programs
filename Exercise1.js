/*In this the code is trying to change the values of a and b without redeclaring variable a, b & not allowing to enter numbers*/

function test()
{
var a = "3";
var b = "8";

var c = a;
a = b;
b = c;
console.log("a is " + a);
console.log("b is " + b);
}
test();