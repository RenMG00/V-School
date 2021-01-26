var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log('vegetables:',vegetables)

fruit.shift()
console.log('fruit:', fruit)

var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)
fruit.push(orangeIndex)
console.log('fruit:', fruit)

var vegLength = vegetables.length
console.log(vegLength)
vegetables.push(vegLength)
console.log('vegetables:', vegetables)

var food = fruit.concat(vegetables)
console.log('food:',food)

food.splice(4, 2);
console.log('food:',food);

const reversed = food.reverse();
// Careful: reverse is destructive -- it changes the original array.
console.log('food:', food);

console.log(food.toString());
