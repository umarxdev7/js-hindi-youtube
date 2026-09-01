const name = "Umar"
const repoCount = 50

//console.log(name + repoCount + "value");
//Not so good method

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
// more appetizing method tab ke upar wali key hai 

// We can declare string both like this "" or like this ''
const name = "Umar"
const age = 22
console.log(`Hello my name is ${name} and my age is ${age}`)
// best method
//we can use tab ke upar wali key (``) and 
//then write text and use ${} 

/********************************************************************** */

const gameName = "UmarKhan"
/******************.length************** */
console.log(gameName.length);
// .length se length pata chalti eg.here it is 8

//.length method nahi property hai
// gameName.length()


/********************Index****************** */
console.log(gameName[0]);
// we use [] this to place a number to 
/* 
ab javaScript me counting 0 
se start hoti. to yaha 0 position
pe u letter that to wo print hogya
*/


console.log(gameName[4]);
//String ka first character = index 0


/***********************.toUpperCase()***************** */
console.log(gameName.toUpperCase());
// .toUpperCase output ko capital banadeta


/************************.toLowerCase()****************** */
console.log(gameName.toLowerCase());
//.toLowerCase output ko small me bna deta


/************************.charAt()************ */
console.log(gameName.charAt(4));
//Kisi particular position ka character chahiye:


/***************************.indexOf************* */
console.log(gameName.indexOf("K"));
console.log(gameName.indexOf("U"));
console.log(gameName.indexOf("z"));//o/p==>-1 mtlb nahi mila
//🧠 Golden rule

//String mein space bhi ek character hota hai aur uska bhi index hota hai.

/**************************.substring()****************** */
console.log(gameName.substring(0,4));
// 0 se start karo aur 3 pe ruko .i.e.   u m a r
//                                       0 1 2 3

console.log(gameName.substring(4,8));


/******************************.slice()******************* */
console.log(gameName.slice(0,4));
//ye bhi string ke ek part nikalta hai
//slice() = string ka ek piece kaat ke de do ✂️

let ogName = "Umar Khan"
console.log(ogName.slice(1,4));// mar
//jahan se lera wo count kar aur jha tak hota waha 1 badha ke dal
//yaha r tak hona tha to r ka index[3]hai lekin maine 4 kiya kyuki wo 
//-1 karke output dete



/*******************************.trim()******************* */
const userName = "   Umar   "
console.log(userName.trim());
//Staring and ending ke unwanted spaces ko remove karta hai


/********************************.replace()********************/
let url = "https://umar.com/umar%20khan"
console.log(url.replace("%20","$"));
// kisi chiz ko replace karna ho. eg. yaha hamne % ko replace
// krke $ lagaya waha ye .replace()use hota hai
//replace(old, new)

let email = "umar@github.com"
console.log(email.replace("@","k"));


/********************************.includes()*************** */
const link = "umar@chrome.com"
console.log(link.includes("umar"));
// Ye check karta hai ke string ke andar koi
//  particular
//text hai ya nahi. Ab yaha maine umar likha jo hai isiliye
//output true aaya
console.log(link.includes("Aaftab"));

//includes()
//   ↓
//"kya ye cheez andar hai?"


/***********************************.split("")*************** */
let player = "Umar"
console.log(player.split(""));
//Matlab string ko characters me tod diya

let player2 = "cr7"
console.log(player2.split(""));

let player3 = "Umar Khan"
console.log(player3.split(" "));
//                        space ko separator bna diya

let cartoon = "Oggy and the Cockroaches"
console.log(cartoon.split(" "));


/*
| Code              | Meaning                            |
| ----------------- | ---------------------------------- |
| `.length`         | kitne characters                   |
| `[0]`             | first character                    |
| `.toUpperCase()`  | CAPITAL                            |
| `.toLowerCase()`  | small                              |
| `.charAt(2)`      | index 2 ka character               |
| `.indexOf("a")`   | `"a"` kahan hai                    |
| `.substring(0,4)` | ek part nikalo                     |
| `.slice(0,4)`     | ek part kaato                      |
| `.trim()`         | extra spaces hatao                 |
| `.replace()`      | ek cheez ko doosri se badlo        |
| `.includes()`     | andar hai ya nahi                  |
| `.split()`        | string ko pieces/array mein tod do |
*/
