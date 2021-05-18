// Use Rest Operator to return array of animals no many how many are passed into it.

const collectAnimals = (...animals) => {  
    return[...animals];
}
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Write a function that returns a food object with 
// the array names as properties using Object Literals

const combineFruit = (fruit, sweets, vegetables) => {
    return {fruit: [...fruit],
    sweets: [...sweets],
    vegetables: [...vegetables]}
}

console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]));

//Use destructuring to use the property names as variables. 
// Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  const {location, duration} = vacation;

  function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
  }

// Use deconstruction

const returnFirst = (items) => {
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem;
}

console.log(returnFirst([1,2,3,4]));

//Write destructuring code to assign variables that will help us return the expected string. 
// Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = (arr) => {
    const [firstFav, secondFav, thirdFav] = arr;
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities));

// Use Rest and Spread
function combineAnimals(arr1, arr2, arr3) {  
    return [...arr1, ...arr2, ...arr3];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Try to make the following function more ES6xy:

const product = (...params) => {  
    const numbers = [...params];

    return numbers.reduce((acc, number) => acc * number, 1)
  }
  console.log(product(1,2,3));

  const unshift = (array, ...params)  => [...params, ...array];

  console.log(unshift([1,2,3], 4,5,6));

  ////////////////////

  const populatePeople = (names) => {
    return names.map((name) => {
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]