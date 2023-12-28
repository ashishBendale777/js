//denoPromises.js
//promuses states
//1 pending
//2 fullfill
//3 reject

//creating promise
const printMessage = new Promise((resolve, reject) => {
    let name = ["Ashish", "Sam", "Sagar", "Pawan"]
    let person = name.find((n) => n == "Sam")
    if (person) {
        resolve(`Hello..${person}`)
    } else {
        reject(new Error("Not Found"))
    }
})

printMessage.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Task Complete")
});


