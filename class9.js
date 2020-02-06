/* Scope */
// Local Scope and Variable
// Global Scope Variable
var sum = 0
function add(a, b) {
  sum = a + b
  console.log('Sum is:', sum);
}
console.log(sum)
// Block Scope Variable
var a = 11
if(a > 10) {
  let isGreater = false
  isGreater = true
  const b = 15
  if(isGreater && b === 15) {
    console.log('A is Greater')
    console.log('B is also okey')
  }
}
let isGreater = 10
console.log(b)
/* var, let, const */