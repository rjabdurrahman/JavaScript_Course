// Why Array
var friend1 = 'Farhad Hossen'
var friend2 = 'Siam'
var friend3 = 'Fardeen Rahman'
var friend4 = 'Jubaier Rahman'
var friend5 = 'Sakib Al Islam'
var friend6 = 'Shakif'
// Array Declartion
// var friends = [
//     'Farhad Hossen',
//     'Siam',
//     'Fardeen',
//     'Jubaier',
//     'Sakib',
//     'Shakif'
// ];
// console.log(friends)
// Array Access
// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])
// console.log(friends[3])
// console.log(friends[4])
// Array Index
// Array Elemnts
// console.log(friends.length)
// for(i = 0; i < friends.length; i++) {
//     console.log(i, friends[i])
// }
// Access Arrlay Elents with For Loops
// for(i in friends) console.log(friends[i])
// for(i of friends) console.log(i)
// Object + Array
// var student1 = {
//     roll: 1,
//     firstName: 'Sakib',
//     lastName: 'Sultan'
// }
var students = [
    {
        roll: 1,
        firstName: 'Sakib',
        lastName: 'Sultan',
        subjects: ['English', 'Bangla', 'Match', 'Science']
    },
    {
        roll: 2,
        firstName: 'Farhad',
        lastName: 'Hossen'
    },
    {
        roll: 3,
        firstName: 'Hasan',
        lastName: 'Sharif'
    },
    {
        roll: 4,
        firstName: 'Mohidul',
        lastName: 'Islam'
    }
]
console.log(students[0].subjects[0])
// for(student of students) {
//     console.log(student.roll, student.firstName)
// }