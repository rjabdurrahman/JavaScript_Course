/* Object Methods */
var person = {
  name: 'Abdur Rahman',
  age: 21
}
// hasOwnProperty()
console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('age'))
console.log(person.hasOwnProperty('skill'))

// Object.keys()
console.log(Object.keys(person))
// Object.values()
console.log(Object.values(person))
// Object.entries()
console.log(Object.entries(person))
// Object.assign()
console.log(Object.assign(person, { status: 'active' }))
// Object.defineProperty()
// Object.defineProperties()
// Object.preventExtension()
// Object.isExtensible()
// Object.seal()
// Object.isSealed()
// Object.freeze()
// Object.isFrozen()
