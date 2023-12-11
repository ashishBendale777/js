var student = {
    stdName: "Ashish",
    stdAge: 29,
    stdCourse: "MCA"
}

student.stdAge = 30
student.stdCity = "BSL"

const studData = [
    {
        stdName: "Ashish",
        stdAge: 29,
        stdCourse: "MCA"
    },
    {
        stdName: "Sam",
        stdAge: 29,
        stdCourse: "MCA"
    },
    {
        stdName: "Pawan",
        stdAge: 29,
        stdCourse: "MCA"
    },
    {
        stdName: "Dhiraj",
        stdAge: 29,
        stdCourse: "MSc"
    },
    {
        stdName: "Sagar",
        stdAge: 29,
        stdCourse: "MSc"
    }
]


for (let index = 0; index < studData.length; index++) {
    console.log(index)
    console.log(studData[index].stdName)
}