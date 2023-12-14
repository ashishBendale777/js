const nums = [54, 7, 32, 44, 11, 65, 3434, 66, 23, 66, 23, 5, 14, 545, 6, 23, 52, 5]
const evens = []
const odds = []
console.log(nums.length)
// for (let index = 0; index < nums.length; index++) {

//     if (nums[index] % 2 == 0) {
//         evens.push(nums[index])
//     } else {
//         odds.push(nums[index])
//     }
// }


// nums.forEach((number) => {
//     if (number%2==0){
//         evens.push(number)
//     }else{
//         odds.push(number)
//     }
// })

// nums.forEach((number) => {
//     number % 2 == 0 ? evens.push(number) : odds.push(number)
// })



// for (const key in nums) {
//     console.log(nums[key])
// }

// for (const number of nums) {
//     console.log(number)
// }

const emp = {
    empId: 1,
    empName: "Ashish",
    empDept: "Soft Dev",
    empSalary: 231213,
    empDesignation: "Manager"
}

for (const key in emp) {
    console.log(emp[key])
}

// for (const iterator of emp) {
//     console.log(iterator)        
// }


// console.log(evens)
// console.log(odds)
