let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    let alphaArray = [];

    for(let i = 0; i < alphabet.length; i++) {
        alphaArray[i] = alphabet[i].toUpperCase();
    }

    let peopleArray = [];

    for(let i = 0; i < people.length; i++) {
        peopleArray.push(people[i] + ":");
        for (let k = 0; k < alphaArray.length; k++) {
            peo9ipleArray.push(alphaArray[k]);
        }
    }
    return peopleArray;
}
console.log(forception(people, alphabet));
// Output: 
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]