/* Loops */
// for
for (var i = 0; i < 10; i++) {
    console.log(i)
  }
  console.log(i)
  // for...in
  var arr = [12, 14, 5, 15, 75, 12]
  for (i in arr) {
    console.log(arr[i])
  }
  console.log(i)
  // for...of
  for (i of arr) {
    console.log(i)
  }
  console.log(i)
  // while
  var j = 0
  while (j < 11) {
    console.log(j)
    j++
  }
  console.log(j)
  // do...while
  do {
    console.log(j)
    j++
  } while (j < 17)
  // forEach
  
  var students = ['Abir', 'Siam', 'Simanto', 'Kobir']
  students.forEach(function (x) {
    console.log(x)
  })
  