//closerExmPersom.js
function createPerson(name, city) {
    let age = 0
    return {
        getAge: function () {
            return age
        },
        getPerData: function () {
            return `${name} from ${city}`
        },
        increseAge: function () {
            ++age
        }
    }
}

//creating person
const person=createPerson("Ashish","BSL")

console.log(person.getAge())
console.log(person.getPerData())
person.increseAge()
person.increseAge()
person.increseAge()
person.increseAge()
console.log(person.getAge())
console.log(person.getPerData())
