/*************************USERNAME GENERATOR****************** */

let nameFirst = "  Umar  "
let nameLast = "  Khan  "
let min = 1
let max = 100
let randomNumber = Math.floor(Math.random ()*(max-min+1)+min)

let displayName = nameFirst.trim() + " " + nameLast.trim()

let userName1 = nameFirst.trim().toLowerCase() + "_" + nameLast.trim().toLowerCase() + randomNumber

let initials =  nameFirst.trim().charAt(0) + nameLast.trim().charAt(0)

let length = userName1.length

console.log("Name:" , displayName);
console.log("Username:", userName1);
console.log("Initials:", initials);
console.log("Username Length:", length);


