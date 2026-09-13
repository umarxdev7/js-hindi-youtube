// ARRAY RE (ARE RE)
//abhi tak hame 5 expenses store karne hote to ham
let foodExpense = 850
let travelExpense = 1200
let shoppingExpense = 2499
let entertainmentExpense = 999
let studyExpense = 1500
 
//ye bohot irritating hai ... instead
let expenses = [850, 1200, 2499, 999, 1500]
console.log(typeof expenses);
//javaScript me array ka type object hai

// Array = ek single variable ke andar multiple values
//store karna

//To make arrays we use sqaure brackets []
let fruits = ["Apple", "Pineapple", "Mango", "Banana"]

//Numbers
let marks = [234, 3, 4534, 4535, 4464634]

// Mixed Values
let data = ["Umar", 7, true]

//Array Index
//==> JavaScript me array ki indexing 0 se start hoti hai
console.log(data[0]);
//first value ka index 0
console.log(marks[4]); //4464634

/*********************Length of Array********************** */

let fruits1= ["Apple", "Banana", "Mango", "Orange"]

console.log(fruits1.length)//4
//length of array matlab total items in an array

let names = ["cr7", "Messi"]
console.log(names.length);


/*********************CHANGING VALUES IN AN ARRAY************************** */

let fruits2 = ["Apple", "Banana", "Mango"]

fruits2[1] = "Orange"

console.log(fruits2);

let numbers = [23, 32, 34]
numbers[1] = 7
console.log(numbers);


/********************.push()********************** */
//push()
let fal = ["Apple", "Banana", "Mango"]
fal.push("Orange")
console.log(fal);
//push() end me item add karta hai

let aankde = [3, 43, 435, 45]
aankde.push(7)
console.log(aankde);


/************************.pop()******************* */

fal.pop("Orange")
console.log(fal);
//.pop() last item ko remove karta hai

aankde.pop(7)
console.log(aankde);
//.shift() AND
//.pop() koi argument nahi lete ye yad rakhna



/*********************.unshift()******************** */

let fruits3 = ["Banana", "Mango"]
fruits3.unshift("Apple")
console.log(fruits3);
//.unshift() beginning me item add karta hai


/************************.shift()********************/
fruits3.shift("Apple")
console.log(fruits3);
//.shift() beginning se remove karta hai


/*
| Method      | Kya karta hai?  |
| ----------- | --------------- |
| `push()`    | End mein add    |
| `pop()`     | End se remove   |
| `unshift()` | Start mein add  |
| `shift()`   | Start se remove |
*/


/***********************.includes()********************* */
//check karta hai ki array me koi value hai ya nahi
//strings ke jaisi hai ye sab
let fruits4 = ["Apple", "Banana", 
    "Mango"
]
console.log(fruits4.includes("Mango")); //true

console.log(fruits4.includes("Pineapple")); //false


/*********************.indexOf()*************** */
//kisi element ka index batata hai
console.log(fruits4.indexOf("Banana")); //1
console.log(fruits4.indexOf("Apple")); //0
console.log(fruits4.indexOf("Pineapple")); // agar index na mile to -1
//same like the string


/***********************.join()******************** */
//Array ko ek string me convert kar deta hai

let fruits5 = ["Apple", "Banana", "Mango"]
console.log(fruits5.join()); //Apple, Banana, Mango
//Separator
console.log(fruits5.join(" - "));
console.log(fruits5.join("-"));


/************************.slice()******************* */

let fruits6 = ["Apple", "Banana", "Mango", "Orange"]

console.log(fruits6.slice(0, 3)); 
 // jaha se katna hai wo aata jaha tak katna hai -1
 //here apple ko lena tha to apple at 0 and mango tak rakhna
 //tha to 3 tak. If we have to add orange also we have to go
 //from 0 to 4
 let newfruits = fruits6.slice (0,4)
 console.log(newfruits);
 //Remember start included end excluded


 /**********************.splice()************************ */
 let players = ["Ronaldo", "Messi", "Mbappe", "Bellingham", "Vinicius"]
 let removedPlayers = players.splice(2, 1)
 console.log(players);
 

/*Yahan:

Index:     0         1        2          3            4
          Ronaldo   Messi   Mbappe   Bellingham   Vinicius
                              ↑

2 → kahan se start karna hai

1 → kitne elements delete karne hain

So "Mbappe" remove ho jayega.

Array:

["Ronaldo", "Messi", "Bellingham", "Vinicius"] 
*/
let removedPlayers1 = players.splice(0,2)
console.log(players);


//.splice() se add bhi kar skte hai
let players1 = ["Ronaldo", "Messi", "Bellingham", "Vinicius"]
let added = players1.splice(2, 0, "Mbappe")
console.log(players1);

/* 2==> index 2 se start karo
0==> kuch delete mat karo
"Mbappe"==> index 2 pe insert karo */


//ADD AND DELETE EK SATH
let players2 = ["Ronaldo", "Messi", "Mbappe", "Bellingham"]
let chutiyapa = players2.splice(2, 1, "Haaland")
console.log(players2);
/*
2 → index 2
1 → 1 element delete
"Haaland" → new element insert */

//Ab kaam ki bat yar rakh. In sale splice ke operations me
// final log se pehle ek variable declare karke uska operation karna
// fir jake final log karna. Nahi to different o/p dekhne milenge

let players3 = ["Ronaldo", "Messi", "Mbappe"]
let removed3 = players3.splice(1,1)

console.log(removed3); //["Messi"]
console.log(players3); //["Ronaldo", "Mbappe"]

//Difference between .splice() and .slice()
/*Short memory trick:

SLICE = piece nikaal ke copy 🍕
SPLICE = original mein surgery 🔪😂 */


let players4= ["Ronaldo", "Messi", "Mbappe", "Bellingham", "Vinicius"]
let removing = players4.splice(2,1)
console.log(players4);
let adding = players4.splice(2, 0 , "Mbappe")
console.log(players4);
let removeAndAdd = players4.splice(4, 1, "Neymar")
console.log(players4);
let adding1 = players4.splice(1, 0 , "Haaland")
console.log(players4);


/**********************.concat()********************** */
let manUnited = ["Ronaldo", "Bruno"]
let realMadrid = ["Mbappe", "Vincius"
]
let Khiladi = manUnited.concat(realMadrid)
console.log(Khiladi);

//.concat()==> ka use do ya more arrays ko combine karne ke liye hota hai

let portugal = ["Cristiano", "Fernandes", "NunoMendes", "DiogoCosta"]
let france = ["Mbappe", "Ousmane", "Olise", "Konate"]

let worldCup = portugal.concat(france)
console.log(worldCup);

//.concat() ne original arrays ko kuch nahi kiya bas ek naya variable
//banake usme kaand kiya


/**************************Spread Operator(...)**********************/
//ye .concat() ka modern aur bahut common alternative hai
//... ka matlab arrays ke andar ki values ko unpack kardo

//eg..
let city1 = ["Mehkar", "Aurangabad"]
let city2 = ["Khamgaon", "Bulddhana"]
let unPacking = [...city1,...city2]
console.log(unPacking);

let portugal1 = ["Cristiano", "Fernandes", "NunoMendes"]
let france1 = ["Mbappe", "Olise", "Konate"]
let worldCup1 = [...portugal1, ...france1]
console.log(worldCup1);

//.concat() aur spread operator(...) ke result ek jaise ho sakte hai
//but spread operator... is more flexible


let football = ["Ronaldo", "Messi"]
let cricket = ["Kohli", "Rohit"]
let tennis = ["Alcaraz", "Sinner"]

let sportsPlayers = football.concat(cricket,tennis)
console.log(sportsPlayers);

let sports = ["Football:", ...football, "Cricket:", ...cricket, "Tennis",  ...tennis]
console.log(sports);



/************************Array.isArray()****************** */
let footBall = ["Ronaldo", "Messi"]
console.log(Array.isArray(footBall));//true
//because footBall is an array

let player = "Ronaldo"
console.log(Array.isArray(player));
//false, because player is not an array

/*➡️ value Array hai? → true
➡️ Array nahi hai? → false */



/*************************Array.from()***************** */
//kisi value ko array me convert karna
 
let name = "Umar"
console.log(Array.from(name));

let city = "Jalgaon"
console.log(Array.from(city));

let siuuu = "Ronaldo"
console.log(Array.from(siuuu));



/***********************Array.of()*********************/


let khiladis = Array.of("Ronaldo", "Messi", "Mbappe")
console.log(Array.of(khiladis));
//Array.of() ==> diye hue values se new array banata hai

let numbers6 = Array.of(10, 20, 30)
console.log(numbers6);

let data1 = Array.of("Ronaldo", 7, true, "Portugal")

console.log(data1)


/*🧠 Ab 3 concepts ek saath lock kar:
Method	Kaam
Array.isArray()	Check karta hai → Array hai ya nahi?
Array.from()	Value ko Array mein convert karta hai
Array.of()	Given values se new Array banata hai
🔥 Quick memory trick
isArray → CHECK 🔍
from    → CONVERT 🔄
of      → CREATE 🏗️ */



/*************************ARRAY REFERENCE******************** */

/*🧠 Array Reference — SUPER IMPORTANT

Sabse pehle simple example:

let football = ["Ronaldo", "Messi"]

let players = football

Ab dekh:

football  ───────┐
                 ↓
          ["Ronaldo", "Messi"]
                 ↑
players  ────────┘

Dono variables same array ko point/refer kar rahe hain.

Ab:
players.push("Mbappe")

players mein Mbappe add hua.

Lekin:

console.log(players)

Output:

["Ronaldo", "Messi", "Mbappe"]

Aur:

console.log(football)

Output bhi:

["Ronaldo", "Messi", "Mbappe"]

😳 Kyun?!

Because players ne koi naya array nahi banaya.

let players = football

iska matlab roughly:

"players, tu bhi usi array ko refer kar."

🔥 Ek aur example
let a = [10, 20, 30]

let b = a

b.push(40)

console.log(a)
console.log(b)

Output:

a → [10, 20, 30, 40]
b → [10, 20, 30, 40]
🧠 Yaad rakh:
let b = a

❌ "a ki ek completely new copy bana do"

Nahi.

✅ "b ko bhi wahi array de do"

😈 AB TERA TEST

Bina run kiye bata:

let portugal = ["Ronaldo", "Bruno"]

let team = portugal

team.push("Nuno")

console.log(portugal)
console.log(team)

Dono ka output kya aayega? 👀🔥

ronaldo, bruno, nuno

BHAIIII 🔥🔥🔥 100% CORRECT!

Dono ka output:

["Ronaldo", "Bruno", "Nuno"]

Because:

let team = portugal

➡️ team aur portugal same array ko refer kar rahe hain. 🧠

⚠️ But ek important question

Agar mujhe actual separate copy chahiye ho toh?

Yahi reason hai ki humne pehle spread operator padha tha! 😎

let portugal = ["Ronaldo", "Bruno"]

let team = [...portugal]

team.push("Nuno")

console.log(portugal)
console.log(team)

Ab output:

portugal → ["Ronaldo", "Bruno"]

team → ["Ronaldo", "Bruno", "Nuno"]

🔥 Kyunki:

[...portugal]

➡️ portugal ke elements se new array bana raha hai.

🧠 Final difference:
let team = portugal
        ↓
Same array 🔗

let team = [...portugal]
        ↓
New array 📋

Ye difference bahut important hai bhai. Isko samajh gaya toh arrays ka ek bada confusing part clear ho gaya. 💪 */

