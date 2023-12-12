var student = {
    stdName: "Ashish",
    stdAge: 29,
    stdCourse: "MCA"
}

student.stdAge = 30
student.stdCity = "BSL"

const studData = [
    {
        stdId: 1,
        stdName: "Ashish",
        stdAge: 29,
        stdCourse: "MCA"
    },
    {
        stdId: 2,
        stdName: "Sam",
        stdAge: 29,
        stdCourse: "MCA"
    },
    {
        stdId: 3,
        stdName: "Pawan",
        stdAge: 29,
        stdCourse: "MCA"
    },
    {
        stdId: 4,
        stdName: "Dhiraj",
        stdAge: 29,
        stdCourse: "MSc"
    },
    {
        stdId: 5,
        stdName: "Sagar",
        stdAge: 29,
        stdCourse: "MSc"
    }
]

//find students
const std = studData.find((student) => student.stdId == 2)

console.log(std)

//filer mca studs
const mcaStud = studData.filter((student) => student.stdCourse == "MSc")

console.log(mcaStud)


