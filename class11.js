/* String */
var line = 'Hunny Coders community'
// lenght
console.log(line.length)
// toUpperCase()
console.log(line.toUpperCase())
// toLowerCase()
console.log(line.toLowerCase())
// substring(start, end)
console.log(line.substring(5, 12))
// slice(start, end)
console.log(line.slice(-9))
// indexOf(char)
console.log(line.indexOf('C'))
// charAt(index)
console.log(line.charAt(16))
// charCodeAt(index)
console.log(line.charCodeAt(16))
// includes(str)
console.log(line.includes('Coders'))
// trim()
var newLine = '    we are best   coder  '
console.log(newLine.trim())
// split(char)
var tags = 'js, ts, php'
console.log(tags)
console.log(tags.split(','))
console.log(line.split('y'))




var score = 'BAN 342/3'
var [run, wicket] = score.split(' ')[1].split('/');
console.log('Run is: ', run)
console.log('Wicket is: ', wicket)