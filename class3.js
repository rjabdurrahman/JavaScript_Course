/* Falsy Values */
// false
// zero value
// empty string
// undefined
// null
// NaN

/* Comparision Operators */
console.log(1 == 1)
console.log('a' == 'a')
console.log('23' == 23)
console.log('23' === 23)
console.log(3 != 3)
console.log(3 != 4)
console.log(2 !== '2')
console.log(2 > 3)
console.log(2 < 3)
console.log(2 >= 3)
console.log(3 >= 3)
console.log(1 < 3)
console.log(3 < 1)
console.log(3 <= 1)
console.log(3 <= 3)
console.log({} == {})
console.log([] == [])
/* Logical Operators */
// And &&
console.log(1 == 1 && 'a' == 'a')
console.log(4 > 1 && 2 == 3)
// Or ||
console.log(1 == 1 || 'a' == 'a')
console.log(4 > 1 || 2 == 3)
// Not !
console.log(!true)
console.log(!false)
console.log(!(1 == 1))
console.log(!(4 < 3))
/* Conditional Statements */
// if
var a = 4
var b = 12
if (a == 3) {
  console.log('Yes')
  console.log('I am okey')
}
if (a > 1 && b < 0) console.log('Alright')
if (a > 1 && b < 0) {
  console.log('It is right')
}
// if...else
if (a == 3) {
  console.log('Value is 3')
} else {
  console.log('Value is not 3')
}
// if...else ladder
if (a > 0 && b < 0) {
  console.log('A is Non-Zero and B is Zero')
} else if (a > 0 && b > 0) {
  console.log('Both is non-zero')
}
// nested if else

// switch
/* Conditional Operators */
// ? :
