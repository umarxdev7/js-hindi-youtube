/******************STUDENT RESULT ANALYZER*************** */

let firstName = "  Umar  "
let lastName = "  Khan  "

let rollNumber = 27
 
let math = 87
let physics = 76
let chemistry = 91
let computer = 84
let english = 79

let min = 1000
let max = 9999

let resultDate = new Date ()

let studentName = firstName.trim() + " " +  lastName.trim()
let initials = firstName.trim().charAt(0) + lastName.trim().charAt(0)

let totalMarks =  math + physics + chemistry + computer + english
let percentage = totalMarks / 500 * 100
let average = totalMarks / 5
let maxMarks = Math.max(math,physics,chemistry,computer,english)
let minMarks = Math.min(math,physics,computer,chemistry,english)
let difference = maxMarks - minMarks
let square = percentage * percentage
let half = percentage / 2
let double = 2 * percentage


let studId = Math.floor(Math.random() * (max - min + 1) + min)



console.log("Student Name:", studentName);
console.log("Initials:", initials);
console.log("Roll Number:", rollNumber);
console.log("Student ID: STU -" + studId); //+ ne output ko thoda cleaner bana diya

console.log("Math:", math);
console.log(physics);
console.log(chemistry);
console.log(computer);
console.log(english);




console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage.toFixed(2));
console.log("Average Marks:", average.toFixed(2));
console.log("Highest Marks:", maxMarks);
console.log("Lowest Marks:", minMarks);
console.log("Difference:", difference);
console.log("Rounded Percentage:",Math.round(percentage));

console.log("Percentage Square:", square.toFixed(2));
console.log("Percentage Half:", half.toFixed(2));
console.log("Percentage Double:", double.toFixed(2));



console.log("Result Date:", resultDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));

console.log("Result Day:", resultDate.getDay());
console.log("Result Month:", resultDate.getMonth() + 1);
console.log("Result Year:", resultDate.getFullYear());
console.log("Result Time:", resultDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
}));
console.log("Timestamp:", resultDate.getTime());










 

