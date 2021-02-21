let name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//ES6 Fat Arrow..Change .map() to contain arrow.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

// Use an arrow in .filter()
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly);

}

// Rewrite these arrow style
const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

//Write a printString function that takes firstName, lastName, 
// and age as parameters and returns a string like the following:

let firstName = "Jane";
let lastName = "Doe";

const printString = (firstName, lastName, age = 100) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}

console.log(printString("Kat", "Stark", 40));

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

const filterForDogs= (arr) => {
    return arr.filter(animal => animal.type === "dog")
}

console.log(filterForDogs(animals))

const post = (location = "Hawaii", name = "Janice") => {
    return `Hi ${name}!
        Welcome to ${location}. I hope you enjoy your stay. 
        Please ask the president of ${location} if you need anything.`
}

console.log(post());