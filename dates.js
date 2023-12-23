///dates.js
const currentDate = new Date()
console.log(currentDate)
//console.log(currentDate.getTime())
console.log(currentDate.getFullYear())
console.log(currentDate.getDate())
console.log(currentDate.getDay())
console.log(currentDate.getMonth())
console.log(currentDate.getMinutes())
console.log(currentDate.getHours())
console.log(currentDate.getTimezoneOffset())

console.log("Testing",currentDate.getDate(), currentDate.getMonth("default", { month: 'short' }) + 1, currentDate.getFullYear())
console.log(currentDate.toLocaleDateString())