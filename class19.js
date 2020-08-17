function one() {
    console.log('F1')
}
function two() {
    console.log('F2')
}
setInterval(one, 3000)
two()
console.log('One')
console.log('Two')
console.log('Three')
