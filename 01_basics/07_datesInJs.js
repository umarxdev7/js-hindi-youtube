let myDate = new Date()
console.log(myDate);
// ye hame current date and time deta hai

/* javaScript me date ek object hai like new number
waise hi type me. 
let myDate = new Date()
mein:

Date → built-in JavaScript object/constructor
new → naya Date object create karta hai
myDate → us object ko store karta hai

Exactly jaise humne dekha tha:
const balance = new Number(100)*/

console.log(typeof myDate); //object



/*******************DATE TO STRING****************** */

console.log(myDate.toString());
//ye date ko readable string ke form me deta hai



/*******************CREATING OUR OWN DATE******************** */

let myCreatedDate = new Date (2026, 10, 2)
console.log(myCreatedDate);
// very important thing in jS, months start from zero
/*0  → January
1  → February
2  → March
3  → April
...
11 → December*/

//new Date = (2023, 0, 23) //23 january 2023



/**********************TIME WITH DATE*********************** */
let myCreatedDate1 = new Date (2026, 10, 2, 5, 3)
console.log(myCreatedDate1);
/*
2023 → year
0    → January
23   → date
5    → hour
3    → minute /



/*************************STRING FORMAT SE MY CREATED DATE********************** */

let myCreatedDate2 = new Date("2023-1-5")
console.log(myCreatedDate2);
// jab string likh rha hai tab 1 mtlb january...

let myCreatedDate3 = new Date("2026/11/2")
console.log(myCreatedDate3);



/*************************.getTime()********************** */
console.log(myDate.getTime());
//get time date ko miliseconds me convert krta hai

console.log(myCreatedDate.getTime());



/**************************.getDate()*********************/
console.log(myDate.getDate()); //5
//current month ka day batata hai

console.log(myCreatedDate.getDate());



/***************************.getDay()******************** */
console.log(myDate.getDay()); //6
//ye week ka day return karta hai

/*
But numbering:

0 → Sunday
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday

⚠️ Yahan bhi indexing 0 se start hoti hai.*/



/**************************.getMonth********************** */
console.log(myDate.getMonth()); //8
//0 → January
//1 → February
//2 → March
//...
//11 → December



/****************************.getFullYear********************** */
console.log(myDate.getFullYear()) //2026
//ye simply year de deta hai



/****************************.getHours()************************ */
console.log(myDate.getHours);
console.log(myDate.toLocaleString("en-IN"));// india ke hisab se dega



/*****************************.getMinutes()********************* */
console.log(myDate.getMinutes());
//minutes return krega



/*****************************.getSeconds()*********************** */
console.log(myDate.getSeconds());
//seconds return krega



/*****************************.toLocaleString()********************** */
console.log(myDate.toLocaleString());
//ye date + time ko local readable format mein deta hai



/*****************************.toLocaleDateString()******************** */
console.log(myDate.toLocaleDateString()); //9/5/2026 aaj ke hisab se
//sirf date no time


/******************************.toLocaleTimeString()******************* */
console.log(myDate.toLocaleTimeString());
//sirf time no date



/*******************************Date.now()*************************** */
console.log(Date.now());
// ye current timestamp in milliseconds deta hai

let date1 = new Date ("2025-1-1")
let date2 = new Date ("2026-1-1")

console.log(date2.getTime() > date1.getTime());
//true
//kyunki 2026 wali date baad ki hai



/******************************CHEAT SHEET************************** */
/*
Date banana:
new Date()

Specific date:
new Date(2023, 0, 23)

String se:
new Date("2023-01-23")

Current timestamp:
Date.now()

Date se information nikalna:
getDate()
getDay()
getMonth()
getFullYear()
getHours()
getMinutes()
getSeconds()
getTime()

Formatting:
toString()
toLocaleString()
toLocaleDateString()
toLocaleTimeString()
🔥 Sabse important confusion — getDate() vs getDay() vs getMonth()

Isko abhi hi pakka kar le:

Suppose:

23 January 2023
Monday

Then:

getDate()

→ 23

getDay()

→ 1 because Monday = 1

getMonth()

→ 0 because January = 0

getFullYear()

→ 2023

Ek line mein:
getDate()     → date
getDay()      → week ka day
getMonth()    → month
getFullYear() → year
*/