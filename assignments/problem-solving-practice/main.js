
const largest = (array) => {
    let largest = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}
console.log(largest([3, 5, 2, 8, 1]));


//lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

const letterWithStrings = (array) => {

    let filteredWords = array.filter(word => word.includes("!"));

    return filteredWords;
}

console.log(letterWithStrings(["#3", "$$$", "C%4!", "Hey!"]));


//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
//isDivisible(4, 2) // => true, isDivisible(9, 3) // => true, isDivisible(15, 4) // => false


const isDivisible = (num1, num2) => {
    
    let dividedVar = num1 % num2;
    if (dividedVar === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible(4, 2));
console.log(isDivisible(9,3));
console.log(isDivisible(15,4));