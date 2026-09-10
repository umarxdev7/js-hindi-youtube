/**********************RANDOM NUMBER GAME******************** */


let minimum = 1
let maximum = 100

let randomNumber = Math.floor(Math.random()*(maximum-minimum+1)+minimum)
let squareValue = randomNumber * randomNumber
let cubicValue = randomNumber * randomNumber * randomNumber
let doubleValue = 2 * randomNumber
let halfValue = randomNumber / 2
let lastDigit = randomNumber % 10
let difference = randomNumber - 50
console.log("Random Number is :", randomNumber);
console.log("Square of Random Number is:", squareValue);
console.log("Cube of Random Number is:", cubicValue);
console.log("Double value is:", doubleValue);
console.log("Half value is:", halfValue.toFixed(2));
console.log("Absoulte Difference from 50 is:", Math.abs(difference));
//or ("Absolute Difference from 50 is:", Math.abs(randomNumber - 50))
console.log("Last Digit is:" , lastDigit)


