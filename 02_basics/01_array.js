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
//Syntax
/**************array[0] = "New Value"***************/

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



