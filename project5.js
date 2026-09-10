/********************USER PROFILE GENERATOR******************* */

let firstName = "  Umar  "
let lastName = "  Khan  "
let birthYear = 2003
let currentYear = new Date().getFullYear()
let minimumValue = 1
let maximumValue = 9999
let birthDate = new Date(2003, 0, 15)
let currentDate = new Date()

let randomNumber = Math.floor(Math.random() * (maximumValue - minimumValue + 1) + minimumValue)
let fullName = firstName.trim() + " " + lastName.trim()
let initials = firstName.trim().charAt(0) + lastName.trim().charAt(0)
let userName = firstName.trim().toLowerCase() + "_" + lastName.trim().toLowerCase() + randomNumber
let age = currentYear - birthYear 
let squareAge = age * age

console.log("Full Name is:", fullName);
console.log("Initials are:", initials);
console.log("UserName is:", userName);
console.log("Your age is:", age);
console.log("The length is:", userName.length);
console.log("The square of age is:", squareAge);
console.log("User's Birth Day is:", birthDate.getDate());
console.log("User's Birth Month is:", birthDate.getMonth() + 1);
console.log("User's Birth Year is:", birthDate.getFullYear());
console.log("User's Birth day(day) is:", birthDate.getDay());
console.log("Birht date timestamp is:", birthDate.getTime());
console.log("Current date is:", currentDate.toLocaleString("en-IN" ,{ timeZone: "Asia/Kolkata" }));




