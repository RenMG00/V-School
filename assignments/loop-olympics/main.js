// Print number 0-9 to the console.
[...Array(9)].forEach((e, i) => console.log(++i));

// Print the numbers 9-0 in the console.
for (var i of [8, 7, 6, 5, 4, 3, 2, 1, 0]) console.log(++i);

// Print all items from the array to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// Bronze:Push numbers 0-9 into an array.
function factorialize(num) {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push(i)

    }
    return arr;
}

console.log(factorialize(9));

// Bronze:Return even numbers between 0-100.
[...Array(100)].forEach((e, i) => {

    if (i % 2 === 0) {

        console.log(i);
    }
})

// Print every other item from the array to the console.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (var i = 0; i < fruit.length; i++) {
    if (i % 2 === 0) {
        console.log(fruit[i]);
    }
}

//Silver: Print out all names of people to the console.
var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}


let namesArray = []
let occupationsArray = []
for (let i = 0; i < peopleArray.length; i++) {
    namesArray.push(peopleArray[i].name)
    occupationsArray.push(peopleArray[i].occupation)
}
console.log(namesArray)
console.log(occupationsArray)

let names = [];
let occupations = [];

for (let i = 0; i < peopleArray.length; i++) {
    i % 2 === 0 ? names.push(peopleArray[i].name) : occupations.push(peopleArray[i].occupation);

}
console.log(names);
console.log(occupations);
