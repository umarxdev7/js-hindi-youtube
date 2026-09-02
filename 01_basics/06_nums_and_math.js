const score = 400
console.log(score);

/*const balance = 100
console.log(balance); //100
console.log(typeof balance); */ //number

const balance = new Number (100)
console.log(balance);
console.log(typeof balance);
/* yaha number ka as a constructor ki tarah use 
hora hai. javaScript ne ek number object create kara
jikse andar value 100 hai*/

// Normal Number ==> const balance = 100
// Number Object ==> const balance = new Number (100)

//const balance = 100 best practice

const newBalance = new Number (100)
console.log(newBalance.toString());
console.log(typeof newBalance.toString());
//toString()==> kisi value ko string representation
//me convert kar deta hai

console.log(newBalance.toString().length);
console.log(newBalance.length); //undefined
/*🧠 Yaad rakh:
"Umar".length

✅ String → .length available

100.length

❌ Aise directly nahi

new Number(100).length

❌ Number object mein .length nahi

new Number(100).toString().length

✅ Pehle String → phir .length

Toh tera concept sahi direction mein hai bhai:
 .length ko string ke saath use kar sakte hain;
  bas String ko separately declare karna compulsory nahi, conversion bhi kar sakte hain. 🔥*/


/************************.toFixed()******************/

 console.log(newBalance.toFixed(2)); //100.00
 //it means decimal ke bad 2 digits chahiye

 let price = 100.9937
 console.log(price.toFixed(1)); //101
 console.log(price.toFixed(3)); //100.994
 
 console.log(typeof price.toFixed());
 //.toFixed() string return karta hai*******



 /**************************.toPrecision********************/
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));
//Yaha 3 mtlb 3 significant numbers lene ke hai
/*23.9
↑↑↑
3 significant digits*/

console.log(otherNumber.toPrecision(2)); //24

/*toFixed()
→ decimal point ke BAAD kitne digits

toPrecision()
→ TOTAL significant digits */

console.log(1234.78945.toPrecision(3)); //1.23e+3


/************************.toLocaleString()******************* */
const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000
//ye number ko readable format me bnata hai

console.log(hundreds.toLocaleString('en-IN'));//10,00,000
//🔥 Ye especially India mein prices/amounts display karte waqt useful hai.


/*******************************Number Limits**************************** */

/* 
Number.MAX_VALUE ==>javaScript ka approximately sabse bada representable number
Number.MIN_VALUE ==> javaScript ka sabse chota positive number
Number.MAX_SAFE_INTEGER ==> javaScript me integer ki largest safe integer limit */

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
//Exact value dekhne ki zarurat nahi; concept yaad rakh.



/**********************MATHS********************* */

// javaScript me maths ek built in object hai jisme 
//mathematical operations ki useful properties hain

// 1.Math.abs()
console.log(Math.abs(-7)); //7 absolute value dega
console.log(Math.abs(7));  // 7
//basically negative sign hata deta hai



// 2.Math.round()
console.log(Math.round(4.7));//5
console.log(Math.round(5.2)); //5
console.log(Math.round(7.1)); //7
// in short nearest integer ki value deta
console.log(Math.round(5.5)); //6
// jiske karib raha wo value deta eg.5.2 ==> 5 
// 7.8==>8



// 3. Math.ceil()   Upar ki bada integer
console.log(Math.ceil(4.3)); //5
console.log(Math.ceil(4.084)); //5



//4. Math.floor()  niche ki value deta integer 
console.log(Math.floor(7.9));
console.log(Math.floor(4.8));

//ceil  → ⬆️ upar
//floor → ⬇️ neeche



//5. Math.min()  sabse chhota number
console.log(Math.min(4,9,0,3,3));
console.log(Math.min(-4,-4.33,-5,-0.534));



//6. Math.max()   sabse badi value deta 
console.log(Math.max(5,9,7,11)); //11



//7. Math.random() +++++Most Important

console.log(Math.random());
//iska o/p random decimals aate jo 0 se start
//hote lekin 1 nahi aata
//eg==>0.25, 0.72, 0.91 , 0.03, 0.48
//0 ≤ Math.random() < 1

/* ab agar hume 1 se 10 k bich random number chahiye
agar sirf Math.random() likhenge to decimal numbers milenge
hame chahiye 1,2,3,4,5,6,7,8,9,10. To pehle 10 se muliply krte 
hain. Math.random()*10 */

console.log(Math.random()*10)

/* ye krne ke bad jb hame pehle 0.25 , 0.72 mil
rhe the wo ho jaenge  2.5 and 7.2 something like that
Ab iske bad hame use krte hai Math.floor(). kyuki hame 
decimal nahi chahiye uske neeche wala number chahiye*/

Math.floor(2.5) //2
Math.floor(7.2) //7

console.log(Math.floor(Math.random()*10))
//to ab value decimal me nahi integer me aa rhi hai

//Ye hume de skta hai 0,1,2,3,4,5,6,7,8,9 but not 10
// abhi range hai 0==>9
// so ab ham krte hai +1. ab range hogi 1==>10

/*++++++++++++++++++++++++++++++++++++++++++++++++*/
console.log(Math.floor(Math.random()*10) +1); // This is the formula to get random integers 
// from  1 to 10



/*******************************+++++++++++++++++ */

const min = 10
const max = 20

const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randomNumber);



//Therefore Now we have two formulaes for Math.random()
//1. const randomNumber = Math.floor(Math.random() * 10) +1
//This is for range 1 to 10

//2. const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)


//eg. 
let range1 = 30
let range2 = 40
let randomNumber2 = Math.floor(Math.random() * (range2 - range1 + 1) + range1)
console.log(randomNumber2);


let min1 = 34
let max1 = 39
let randomNumber3 = Math.floor(Math.random() * (max1 - min1 + 1) + min1)
console.log(randomNumber3);



















  

 
 
 







