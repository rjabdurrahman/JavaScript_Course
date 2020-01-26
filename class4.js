/* Truthy Values */
// true
if(true) console.log('I am true')
// non zero numbers
if(1) console.log('I am true')
if(-1) console.log('I am true')
if(0.001) console.log('I am true')
if(-0.001) console.log('I am true')
if(Infinity) console.log('I am true')
if(-Infinity) console.log('I am true')
// non empty strings
if('hunny') console.log('I am true')
if('a') console.log('I am true')
// all objects
if({}) console.log('I am true')
if({name: 'hunny'}) console.log('I am true')
if(new Date()) console.log('I am true')
// all arrays
if([]) console.log('I am true')
if([1, 2, 3, 4]) console.log('I am true')

/* Falsy Values */
// false
if(false) console.log('I am true')
else console.log('I am false')
// zero value
if(0) console.log('true')
else console.log('I am false')
// empty string
if('') console.log('true')
else console.log('I am false')
// undefined
if(undefined) console.log('I am true')
else console.log('I am false')
// null
if(null) console.log('I am true')
else console.log('I am false')
// NaN
if(NaN) console.log('I am true')
else console.log('I am false')