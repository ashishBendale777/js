const empData = [
    {
        empId: 1,
        empName: "Ashish",
        empDept: "Soft Dev",
        empSalary: 231213,
        empDesignation: "Manager"
    },
    {
        empId: 2,
        empName: "Sam",
        empDept: "Soft Dev",
        empSalary: 235324,
        empDesignation: "Sr Eng"
    },
    {
        empId: 3,
        empName: "Sagar",
        empDept: "Account",
        empSalary: 1900,
        empDesignation: "Sr Accountant Eng"
    },
    {
        empId: 4,
        empName: "Sarvesh",
        empDept: "Marketing",
        empSalary: 235323,
        empDesignation: "Head"
    },
    {
        empId: 5,
        empName: "Dhiraj",
        empDept: "Marketing",
        empSalary: 43245,
        empDesignation: "Salesman"
    },
]

// const empIdx = empData.findIndex((employee) => employee.empId == 2)
// console.table(empIdx)

console.log(empData.length)
empData.push({
    empId: 6,
    empName: "Amol",
    empDept: "Marketing",
    empSalary: 33245,
    empDesignation: "Salesman"
})
// console.log(empData.length)
// console.table(empData)
// empData.pop()
// console.log(empData.length)
// console.table(empData)

const result = empData.every((emp) => emp.empSalary >= 20000)
console.log(result)


const resultw = empData.some((emp) => emp.empSalary <= 20000)
console.log(resultw)
