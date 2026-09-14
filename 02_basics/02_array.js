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



/***********************.flat()************************** */

let players = ["Ronaldo", "Bruno", ["Bernardo", "Leao"]]

//yaha Bernardo aur Leao ek nested array ke andar hai
let newPlayers = players.flat()
console.log(newPlayers);
//.flat() items ko nested array se bahar nikalta hai

/*****but original array waise hi rehta hai*/
console.log(players);

let portugalSquad = [
    "Ronaldo",
    ["Bruno", "Bernardo"],
    ["Leao", "Vitinha"]
]
let ogSquad = portugalSquad.flat()
console.log(ogSquad);


