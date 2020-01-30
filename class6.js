/* Conditional Statements */
var a = 11
// if(condition)
if (true) console.log('I am true')
if (true) {
  console.log('I am true')
  console.log('I am okey')
}
if (a > 10) {
  console.log('A is greater than 10')
  console.log('It is done')
}
// if(conditon)...else
if (a < 10) {
  console.log('A is greater than 10')
  console.log('It is done')
} else {
  console.log('I am false')
}
// if(condition)...else if(condition)...else
// Or if else ladder
var b = 10
if (b > 300) console.log('It is 300')
else if (b > 100) console.log('It is 100')
else if (b > 40) console.log('I am 40')
else console.log('I am less than 40')
// if(condition) { if(conditon)...else } else
// Or nested if else
var m = -1
var n = -2
if (m > 0) {
  if (n > 0) console.log('Both are positive')
  else console.log('M is positive but N is negative')
} else {
  if (n > 0) console.log('M is negative but N is positive')
  else console.log('Both are negative')
}
// switch(value)
var p = 1
switch (p) {
  case 1:
    console.log('I am one')
    break
  case 2:
    console.log('I am two')
    break
  case 3:
    console.log('I am three')
    break
  default:
    console.log('I am none')
}
/* Conditional Operators */
// condition ? : True Statement : False Statement
p > 10 ? console.log('Yes') : console.log('No')
