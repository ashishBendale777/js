//closer function

function createCounter() {
    let count = 0
    return function () {
        return ++count
    }
}

const counter = createCounter()
const counter2 = createCounter()

console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter())
console.log(counter2())

// console.log(counter())
// console.log(counter())