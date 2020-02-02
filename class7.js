/* Loops */
// for
for (var i = 0; i < 10; i = i + 1) {
    if(i == 6) continue;
    console.log(i)
}
// for...in
var nums = [2, 5, 6, 11, 14, 56]
for (i in nums) {
    if(i == 2) continue;
    console.log(nums[i])
}
// for...of
for (i of nums) {
    console.log(i)
    if(i == 11) break;
}
var students = ['Abir', 'Salim', 'Rony', 'Siam', 'Mostafizur']
for (i of students) {
    console.log(i)
    if(i == 'Rony') break;
}
// while
var j = 0
while (j < 10) {
    console.log(j)
    j++;
    if(j == 4) break;
}
// do...while
var k = 10
do {
    console.log(k)
    k++;
} while(k <= 20)
// forEach
students.forEach(function(s){
    console.log(s)
})