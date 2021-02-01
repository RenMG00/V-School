
// Part 1: How many office items?
let officeItems = [
    "stapler",
    "monitor",
    "computer",
    "desk",
    "lamp",
    "computer",
    "lamp",
    "stapler",
    "computer",
    "computer"
]
let counter = 0;
for (let i = 0; i < officeItems.length; i++) {
   counter++;
}

console.log(counter);

//Part 2: Too Old or Too Young?
let people = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
] 

for (let i = 0; i < people.length; i++) {
    if (people[i].age < 18) {
        console.log("Not old enough!")
    } else {
        console.log("Old enough!")
    }
}
