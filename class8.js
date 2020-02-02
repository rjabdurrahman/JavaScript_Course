/* JS Functios */

/* Function Declaration */
// Named Function
function printHi () {
  console.log('Hi')
}
// printHi()
// Anonymous Function
var printHello = function () {
  console.log('Hello')
}
// printHello();
// Arrow Function
var printArrow = () => {
  console.log('Arrow')
}
// printArrow();
/* Function Parameters */

// add(2, 5)
function multi(a, b) {
  console.log(a * b);
}
// multi(3, 6)
// Callback Function
function Mathmatics(a, b, callback) {
  callback(a, b);
}
// Mathmatics(2, 3, add);
// Mathmatics(2, 3, multi);
/* Functions Returning Value */
function add(a, b) {
  return a + b;
}

function print(data) {
  console.log(data)
}

print(add(34, 6))

