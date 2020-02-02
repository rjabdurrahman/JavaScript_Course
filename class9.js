/* JS Functios */

/* Function Declaration */
function functionName () {
  // body
  // return value
}
// Named Function
function printHi () {
  console.log('Hi')
}
printHi()
printHi()
// Anonymous Function
var hello = function () {
  console.log('Hello')
}
hello()
// Arrow Function
var helloArrow = () => {
  console.log('Hi Arrow ')
}
helloArrow()
/* Function Parameters */
var add = (a, b) => {
  console.log('Addition is:', a + b)
}
add(2, 54)
var multi = function (a, b) {
  console.log(a * b)
}
multi(5, 12)
// Callback Function
function Mathmatics (n1, n2, callback) {
  callback(n1, n2)
}
Mathmatics(12, 5, multi)
/* Functions Returning Value */
