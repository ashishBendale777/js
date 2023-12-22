//denoPromises.js
//promuses


const demPromise = new Promise((resolve, reject) => {
    const name = ["Ashish", "Sam", "Sagar"]
    const person = name.find((n) => n == "Sama")
    if (person) {
        resolve("Hi.." + person)
    } else {
        reject(new Error("Not Found"))
    }
})

demPromise
.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});