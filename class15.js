let numbers = [3, 4, 7, 5, 11, 12, 53, 56]
let students = [
    { name: 'Ariful Islam', age: 21},
    { name: 'Mohidul Haque', age: 22},
    { name: 'Kobir', age: 19},
    { name: 'Mohammad Siam', age: 20},
]
// length
// console.log('Number\'s Length is:', numbers.length)
// push
numbers.push(100)
numbers.push(200)
console.log(numbers)
// pop
console.log(numbers.pop())
console.log(numbers.pop())
console.log(numbers)
// shift
console.log(numbers.shift())
console.log(numbers)
// unshift
console.log(numbers)
// concat
// console.log(numbers.concat([450, 590, 490, 12, 49, 53, 4556]))
// includes
console.log(numbers.includes(54))
// indexOf
console.log(numbers.indexOf(53))
// lastIndexOf
console.log(numbers.concat([450, 590, 490, 12, 49, 53, 4556]).lastIndexOf(53))
// slice
console.log(numbers)
// console.log(numbers.slice(1, 5))
// splice
console.log(numbers.splice(3, 1))
console.log(numbers)
// toString
console.log(numbers.toString())
// join
console.log(numbers.join(''))
console.log(['Siam', 'Robi', 'Haque'].join())
// reverse
console.log(numbers.reverse())
// fill
numbers.fill(0)
console.log(numbers)