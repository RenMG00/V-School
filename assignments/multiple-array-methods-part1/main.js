
let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

let morePeople = [
    {
        firstName: "Leto",
        lastName: "Atreides",
        age: 100
    },
    {
        firstName: "Duncan",
        lastName: "Idaho",
        age: 45
    }
]
const sortedByAge = (arr) => {

    let ageFilter = arr.filter(ages => ages.age >= 18);
    let sortedLastName = ageFilter.sort((lastA, lastB) => {
        if (lastA.lastName < lastB.lastName) {
            return -1;
        }
        if (lastA.lastName > lastB.lastName) {
            return 1;
        }
        return 0;
    })
    let resultArray = sortedLastName.map(listResult =>
        `<li> ${listResult.firstName} ${listResult.lastName} is ${listResult.age}</li>`);
    return resultArray;

}
console.log(sortedByAge(peopleArray), "line 69");

const combinedArray = peopleArray.concat(morePeople);
console.log(combinedArray, "line 72");

const sortByLetters = (arr) => {
    let letterFilter = arr.filter(letter => letter.lastName.endsWith("y") || letter.lastName.endsWith("a"));
    return letterFilter;    
}
console.log(sortByLetters(combinedArray), "line 78");
let removePerson = sortByLetters(combinedArray);
removePerson.splice(1,1);
console.log(removePerson);
let reversed = removePerson.reverse();

console.log(reversed);
