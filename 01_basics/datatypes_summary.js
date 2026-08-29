// Primitive 

// 7 types : String, Number, Boolean, null
// undefined, Symbol, BigInt

let state
console.log(state); //undefined


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
console.log(outsideTemp); // null

const id = Symbol('123') //Symbol
const anotherId = Symbol('123')
console.log(id==anotherId);

const bigNumber = 874365346574357394n //bigInt
console.log(bigNumber);


// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["thor", "captain", "ironMan"]
// Arrays

let myObj = {
    name: "Umar",
    age: 22,
}  //Objects

const myFunction = function(){
  console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
//null ka datatype ==> Object

console.log(typeof myFunction);

console.log(typeof anotherId);

 https://262.ecma-international.org/5.1/#sec-11.4.3
 

