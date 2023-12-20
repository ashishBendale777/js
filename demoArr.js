const nums = [32, 54, 76, 23, 76, 12, 43.54]

// console.log(nums.length)
// for (let index = 0; index < nums.length; index++) {
//     console.log(nums[index])
// }

// for (const i in nums) {
//     console.log(nums[i])
// }

// for (const element of nums) {
//     console.log(element)
// }

console.log(nums)
nums.forEach((element) => {
    element += 12
})

console.log(nums)