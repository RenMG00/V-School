let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

let countBox = {
    FizzBuzz: "",
    Fizz: "",
    Buzz: ""
};

for (i = 1; i <= 100; i++) {
    // number divisible by 3 and 5 will and always be divisible by 15
    if (i % 15 == 0) {
        console.log("FizzBuzz");
        let count1 = counter1++;
        countBox.FizzBuzz = count1;
        // number divisible by 3? 'Fizz'
    } else if ((i % 3) == 0) {
        let count2 = counter2++;
        console.log("Fizz");
        countBox.Fizz = count2;
        // number divisible by 5? 'Buzz'  
    } else if ((i % 5) == 0) {
        let count3 = counter3++;
        console.log("Buzz");
        countBox.Buzz = count3;
    } else {// console.log the number            
        console.log(i);
    }
}
console.log(countBox);
return 0;
