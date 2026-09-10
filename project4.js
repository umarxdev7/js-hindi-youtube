/*********************DATE AND TIME ANALYZER*********************** */

let myDate = new Date()
let myDate2 = new Date(2025, 0, 26)
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getMonth() + 1);
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getTime());
console.log(myDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));

console.log(myDate2);
console.log(myDate2.getMonth() + 1);
console.log(myDate2.getFullYear());
console.log(myDate2.getDay());
console.log(myDate2.getTime());
