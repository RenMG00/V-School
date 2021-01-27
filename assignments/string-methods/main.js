
function capilizeAndLowercase(input) {
    return input.toUpperCase() + input.toLowerCase();
}
console.log(capilizeAndLowercase("HelLo"));

function halfStringRounded(input) {
    return Math.floor(input.length / 2)
}
console.log(halfStringRounded("hello"));
console.log(halfStringRounded("hello world"));

function returnFirstHalf(input) {
    return input.slice(0, halfStringRounded(input))
}

console.log(returnFirstHalf("hello"));
console.log(returnFirstHalf("hello world"));

function capilizeAndLowercase(input) {
    return input.slice(0, halfStringRounded(input)).toUpperCase() +
        input.slice(halfStringRounded(input)).toLowerCase();
}

console.log(capilizeAndLowercase("hello"));
console.log(capilizeAndLowercase("hello world"));

// Extra Step-- Capitalize all letters that follow a space. 

function capAfterSpace(input) {

    var array = input.split(' ');
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    return newArray.join(' ');
}
console.log(capAfterSpace("hey friends! practice practice practice!"));
