// ARRAY DESTRUCTURING 
const oldAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [x, y, ...z] = oldAr
console.log(x, y, z)

const newArray = [x, y, ...z]
console.log(oldAr)
console.log("")
const person = {
    name: 'Rishi',
    age: 27,
    greet(somename) {
        console.log(`Hello my name is ${somename}`)
    }
}

// Object Destructuring

const printPersonName = (personObj) => {
    const { name: personName, age: personAge, greet: greetHuman } = personObj

    console.log(personName, personAge, greetHuman)
    greetHuman(personName)

}
printPersonName(person)



// OUTPUT

// 1) 1 1000
// 2) value1 value2
// 3) 1 1000

