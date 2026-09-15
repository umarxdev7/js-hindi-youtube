let player = {
    name: "Ronaldo" ,
    jersey: 7,
    country: "Portugal"
}
console.log(player);
//array me data index se access hota hai yaha data
//key se access hota hai
player.name
console.log(player.name);
console.log(player.age);
console.log(player.country);
//Here, name==>key, "Umar" ==> value.

let footballer = {
    name: "Ronaldo", 
    age: 41 ,
    country:"Portugal",
    jersey:7
}
console.log(footballer.name);
console.log(footballer.age);
console.log(footballer.country);
console.log(footballer.jersey);

/*********************UPDATING OBJECT VALUES******************** */
let footballer1= {
    name: "Ronaldo",
    age: 41,
    country: "Portugal",
    jersey: 7
}

footballer1.jersey = 10 //bas itna karna hai
console.log(footballer1.jersey)
//Syntax
/*********objectName.key = newValue*************/

footballer1.country = "Saudi Arabia"
console.log(footballer1);


/****************ADDING NEW PROPERTY ********* */
let footballer2 = {
    name: "Ronaldo",
    age: 41,
    country: "Portugal",
    jersey: 7
}

//let's add club in footballer2 object
footballer2.club = "Real Madrid"
console.log(footballer2);
//same as updating values in object
//Syntax: objectName.key = "New Value"

//JavaScript automatically samajh leta hai ki club property pehle exist nahi karti, toh new property create kar deta hai.

let footballer3 = {
    name: "Ronaldo",
    age: 41,
    country: "Portugal"

}
footballer3.jersey = 7
footballer3.club = "Al Nassr"
footballer3.position = "Forward"
console.log(footballer3);



/************************DELETING PROPERTY************************ */

//object me se property delete karne ke liye
delete footballer3.position
delete footballer3.age
delete footballer3.club
console.log(footballer3);
//Syntax: delete objectName.key


/*********************BRACKET NOTATION []**************** */
// hamne abhi tak footballer3.name use karke property access kiya
//ham bracket notation ka bhi use kar sakte hai o/p same ayega
//eg.footballer3["name"]
let player1= {
  name: "Ronaldo",
  country: "Portugal", 
  jersey: 7
}

console.log(player1["name"]);
console.log(player1["contry"]);
console.log(player1["jersey"]);

//using bracket notation[] ham key ko variable ke through access kar skte hai

let player2 = {
    name: "Ronaldo",
    country: "Portugal",
    jersey:7 }
    let property = "country"
    console.log(player2[property]); //ham variable ko double quotes "" me nahi likhte beta


 /*   🧠 Ye important difference hai
player.property

JavaScript "property" naam ki actual key search karega.

Lekin:

player[property]

JavaScript variable property ke andar jo value hai — "country" — us key ko search karega.

So:

property → "country"
player[property] → player["country"] → "Portugal"

🔥 Bracket notation = dynamic key access */

//🎯 Practice

//Ye object:

let player3 = {
    name: "Ronaldo",
    country: "Portugal",
    club: "Al Nassr"
}

let key = "club"
console.log(player3[key]);

/*🔒 Concept locked
player3.club → fixed property
player3["club"] → fixed property
player3[key] → dynamic property ✅

Ye bracket notation ka real reason hai. 🔥 */



/****************FUNCTION INSIDE OBJECT****************** */
let player4 = {
    name: "Ronaldo",

    greet: function() {
        console.log("Hello Ronaldo!");
        
    }
}
console.log(player4.greet()); //undefined
/* Samajh yaha greet ek key hai jo function value store karri
jab bhi koi key ke andar function ho to wo automatically method 
ban jata. Matlab yaha greet ek method hai
jab ham likhte greet () matlab ham uss key ko bolre andar ka function
call karo .. () ==> iska matlab hota hai call karna or is funcion ko exectue karo/ chalao




Step by step dekho 👇

Jab ye execute hota hai:

player4.greet()

function ke andar:

console.log("Hello Ronaldo!");

chal jata hai.

Isliye pehle output:

Hello Ronaldo!

Aata hai. ✅

Lekin function ne kuch return nahi kiya.

JavaScript mein agar function explicitly kuch return nahi karta, toh uska return value automatically:

undefined

hota hai.

Aur tumne bahar se ye likha:

console.log(player4.greet());

Toh actually tum keh rahe ho:

"Pehle greet() chalao, aur jo value woh return kare, usko console.log() karo."

Function kuch return nahi karta → undefined.

Isliye:

Hello Ronaldo!
undefined
🔥 Difference samajh

Case 1:

player4.greet();

Output:

Hello Ronaldo!

Case 2:

console.log(player4.greet());

Output:

Hello Ronaldo!
undefined
Agar return kar dete:
greet: function() {
    return "Hello Ronaldo!";
}

Then:

console.log(player4.greet());

Output:

Hello Ronaldo!

Because ab function actually value return kar raha hai.

🧠 Golden rule

console.log() = screen par print karo
return = function se value bahar bhejo

Ye dono same cheez nahi hain. 🔥 */


let playerx = {
    name: "Ronaldo",

    getName : function(){
        return "Ronaldo";
    }
}
console.log(playerx.getName()); //Ronaldo

/*getName → method ka naam
function() → method ke andar function
return "Ronaldo" → function value return karta hai
player.getName() → method ko call karta hai */

let footballery = {
    name: "Ronaldo",
    introduce:function(){
        return "My name is Ronaldo";
    }}
    console.log(footballery.introduce());
    



/********************Very Important : this.************** */
let footballerz = {
    name: "Ronaldo",
    introduce: function(){
        return "My name is " + this.name
    }
}

console.log(footballerz.introduce());
//here this.name matlab iss object ka name
this.name 

/*🧠 Bas ye rule yaad rakh:

Object ke method ke andar this → us object ko refer karta hai.*/

let khiladi = {
    name: "Ronaldo",
    country: "Portugal",
    
    intro: function(){
        return this.name +  " is from "  + this.country
    }
}
console.log(khiladi.intro());



/******************** SYMBOL[] AS A KEY *********************** */

//const mySym = Symbol("Key1")
//mySym ek symbol value hai
//Symbol ek special data type hai jo unique value bnata hai

const mySym = Symbol("key1")
let khiladia = {
    name: "Ronaldo",
    [mySym]: "Portugal" //[mySym] yaha brackets zaruri hai
}
console.log(khiladia[mySym]);



const mySym1 = Symbol("key1")
let footballera = {
    name: "Ronaldo",
    [mySym1]: "GOAT"
}
console.log(footballera.name);
//or
console.log(footballera["name"]);

console.log(footballera[mySym1]);



/**********************Object.create(null)************************ */

//Object.create() se ham ek naya object create kar sakte hai

let playerb = Object.create(null)
//creates and empty object then we can add properties
playerb.name = "Ronaldo"
playerb.status = "GOAT"

console.log(playerb.name);
console.log(playerb.status);

/*For your current level, {} is the normal and commonly used way:

let player = {};

Object.create() ka deeper purpose prototype/inheritance se related hai, jo abhi unnecessarily confuse karega.

So abhi bas itna understand karo:

let player1 = {};

➡️ normal object

let player2 = Object.create(null);

➡️ another way to create an object, with null as its prototype.*/


let footballerc = Object.create(null)
footballerc.name = "Ronaldo"
footballerc.club = "Al Nassr"
console.log(footballerc.name);
console.log(footballerc.club);



/*********************OBJECT PROPERTY ACCESS************************** */

let playerd  = {
    name: "Ronaldo" ,
    club: "Al Nassr" ,
    country: "Portugal"

}
let key1 = "country"
console.log(playerd[key1]);



/***********************KEY ME SPACE***************** */

let khiladis = {
    "full name" : "Cristiano Ronaldo",
    country : "Portugal"
}
//now we can't access full name like
//khiladis.full name
//instead
khiladis["full name"]
console.log(khiladis["full name"]);



/************************************************* */
let keya = "jersey"
let footballere = {
    name: "Ronaldo",
    [keya]: 7
}
console.log(footballere[keya]);



/**********************Object.freeze()*********************** */
let laptop = {
    brand: "Acer",
    ram: "16GB",
    storage: "512GB"
}

Object.freeze(laptop)
console.log(laptop);

laptop.ram = "32GB"
console.log(laptop.ram);// nhi badlegi kyuki we freezed it



/**********************this.practice*********************/

const users = {
 username: "Umar",
 price: 999,
 welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    
 }
}
users.welcomeMessage() //function call kiya/run kiya
//user.welcomeMessage()//op ==> Umar, welcome to website

const student7 = {
name: "Umar",
welcome: function() {
    console.log(`Welcome ${this.name}`);
    
}
}
student7.welcome()
