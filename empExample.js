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
        empSalary: 23532,
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

const marEmos = empData.filter((employee) => employee.empDept == "Marketing")
console.table(marEmos)

const marEmps = empData.filter((employee) => employee.empDept == "Marketing" && employee.empSalary < 30000)
console.log(marEmps)