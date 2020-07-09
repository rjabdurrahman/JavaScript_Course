/* JavaScript Object */

/* Object Construction */
// Object Literal
var a = {}
console.log(typeof a)
// new Keyword
var b = new Object()
console.log(typeof b)
// Object.create(property)
var c = Object.create(null)
console.log(typeof c)
// new FunctionName(params)
function Man () {
  return 1
}
var d = new Man()
console.log(typeof d)

/* Accessing Object Properties */

var person = {
  name: 'Abdur Rahman',
  age: 21,
  skill: ['js', 'ts', 'php', 'dart']
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.skill)
console.log(person['name'])
console.log(person['age'])
console.log(person['skill'])

/* Assigning Object Properties */

var person2 = {
  name: 'Siam'
}

console.log(person2)
person2.age = 22
console.log(person2)
person2['skill'] = ['php', 'html', 'css']
console.log(person2)

/* Removing Object Properties */

// delete person2.age
delete person2.skill
console.log(person2)

/* View Object as Table */

console.table(person2)

/* Traversing Object */

for(i in person) {
  console.log(person[i])
}
