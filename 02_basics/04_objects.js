/**********************new Object()************************** */
const player = new Object()
//creates an object just like that {}
player.name = "Cristiano Ronaldo"
player.country = "Portugal"
player.jersey = 7
console.log(player);

const khiladi = {} //Modern javaScript me ham ye hi use karenge
khiladi.name = "Umar"
khiladi.age = "22"
khiladi.status = "GOAT"
console.log(khiladi);



/**********************Nested Objects***************************** */
//object ke andar object
const mobile = {
    brand: "Samsung",
    model: "S24",
    specifications: {
        ram: "8GB",
        storage : "256GB"

    }
}
console.log(mobile.brand);
console.log(mobile.specifications.ram);
//kyuki ram specifications me hai aur specifications mobile ke andar
console.log(mobile.specifications.storage);

const company = {
    name: "Google",
    office: {
        location:{
            city: "Mumbai",
            country: "India"
        }
    }
}
console.log(company.office.location.country);

console.log(company.office.location.city);


/******************Object.keys()****************** */
let athlete = {
    name: "Ronaldo",
    country: "Portugal",
        age    : 41,
    jersey: 7
}
console.log(Object.keys(athlete));
/*🧠 Object.keys() kya karta hai?

Object ke saare property names (keys) ko ek array mein de deta hai.*/



/***********************Object.values()********************8 */
console.log(Object.values(athlete));
//ye keys nahi values denga



/************************Object.entries()****************** */
console.log(Object.entries(athlete));
//gives both keys and their values in array (array me pack karke deta re)

/*🔒 Ab ye 3 permanently yaad:
Method	Kya deta hai?
Object.keys(obj)	🔑 Keys
Object.values(obj)	📦 Values
Object.entries(obj)	🔑📦 Key + Value pairs

Bhai ye important real-world methods hain, especially jab backend/API data ke saath kaam karega. 💪 */



/*************************Object.hasOwnProperty()***************************** */
//check karna ke object ke andar koi property actually exist karti hai ya nahi

let athlete1= {
    name: "Ronaldo",
    country: "Portugal",
    age: 41,
    jersey: 7
}

console.log(athlete.hasOwnProperty("name")); //true
console.log(athlete.hasOwnProperty("club")); //false
console.log(athlete.hasOwnProperty("jersey")); //true



/************************Object.assign()*********************** */
//Objects ko combine karta hai
let playerInfo ={
    name: "Ronaldo",
    country: "Portugal"
}

let careerInfo = {
    club: "Al Nassr",
    jersey: 7
}
let info = Object.assign({}, playerInfo, careerInfo)
console.log(info);

/*🧠 Ye {} kya hai?
Object.assign({}, playerInfo, careerInfo)

Sabse pehla {} target/empty object hai.

Baaki objects:

playerInfo
careerInfo

ki properties usmein copy ho jaati hain.

So simple memory:

Object.assign() → objects ki properties ko ek object mein copy/combine karta hai.*/


//Modern Way using spread operator
let info1 = {
    ...playerInfo,
    ...careerInfo
}
console.log(info1);  // same result dega

 
let studentInfo = {
    name: "Umar",
    branch: "IT"
}
let collegeInfo = {
    year : 3,
    city : "Jalgaon"
}
let student = Object.assign({}, studentInfo, collegeInfo)
console.log(student);



/**************************OBJECT SPREAD OPERATOR*************************** */

let user = {
    name: "Umar",
    age: 21
}
let userCopy = {
    ...user
}
console.log(userCopy);
//... user ki properties ko unpack/copy karta hai

//original variable remains unchanged



let personal = {
    name: "Umar",
    age: 21
}

let academic = {
    branch: "IT",
    year: 3
}

let profile = {
    ...personal,
    ...academic
}

console.log(profile);


/********************************************************************************************************** */
let phone = {
    brand: "Samsung",
    model: "S24",
    popularity: {
        status: "Good"
    }
}

let specs = {
    ram: "8GB" ,
    storage: "256GB"

}
let fullPhone = {
    ...phone,
    ...specs
}
fullPhone.popularity = {
    ...phone.popularity //nested object ke waaste ek alag copy banana hai yaad rakh bas itna
}
console.log(fullPhone);


//or 
let fullPhone2 = Object.assign({}, phone, specs)
fullPhone2.popularity = {
    ...phone.popularity
}
console.log(fullPhone2);



/***************************DESTRUCTURING************************* */
const user1 = {
    name: "Umar",
    age: 21,
    city: "Pune"
}

const{name, age, city} = user1
console.log(name);
console.log(age);
console.log(city);
//destructuring matlab hamne object ki properties ko bahar nikalke 
//unko hi variable bana diya ; ab baar baar user. name , age aisa likhne
//ka kaam nhi. Direct likho console.log(age)

//custom destructuring
//naam aur agar alag chize samajh nahi aari to ham change kar skte

const user2 = {
    name: "Umar",
    age: 22
}
const{name: username , age: userage} = user2
console.log(username);
console.log(userage);
//matlab name ki value ko username naam ke variable me store karo


let player7 = {
    name: "Ronaldo",
    age: 42
}
let{name: playerName, age: playerAge} = player7
console.log(playerName);
console.log(playerAge);


/*********************NESTED OBJECT DESTRUCTURING******************** */
let player8 = {
    name: "Ronaldo",
    details: {
        country: "Portugal",
        club: "Al Nassr"
    }
}
let{details: { country, club}} = player8
console.log(club);
console.log(country);

let player9 = {
    name: "Umar",
    formalities: {
        college: "G.H RAISONI",
        branch: "IT"
    }

}
let {formalities: {college, branch}} = player9
console.log(college);
console.log(branch);


/*********************JSON (Java Script Object Notation)***************** */
//JSON ==> ek format hai to store and transfer data

//ek alag file banaya maine json ke liye
//we can't write json in normal js file
//there are no comments in json

//API ek medium hai jiske through application aur server
//data exchange karte hai


//Array of Objects me array ke andar multiple JSON objects hote hai
//ek JSON file me ek hi value allow hoti hai
//JSON formatter = JSON ko clean aur readable format me dikhane ka tool

/* is JSON 
{
    "name": "Umar",
    "age" : 21
}

JSON array of objects ( multiple json objects in an array)

[
{
   "name" : "Umar",
   "age": 22
 },
 {
   "name": "Rahul",
   "age": 21
 },
 {
    "name": "Rohit",
    "age": 24
 }
]

//JSON formatter==> formats the JSON file
{"name":"Ronaldo","age":42,"country":"Portugal","club":"Al Nassr"}

                        {
    "name": "Ronaldo",
    "age": 42,
    "country": "Portugal",
    "club": "Al Nassr"
}
    */