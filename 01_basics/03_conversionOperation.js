let score = 33

console.log(typeof score)

 score = "33"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

score = "33abc"
 valueInNumber = Number(score)
 console.log(typeof valueInNumber)
 console.log(valueInNumber)


 score = null
 console.log(typeof score);
 valueInNumber = Number(score)
 console.log(valueInNumber);
 
 score = undefined
 console.log(typeof score) 
 valueInNumber = Number(score)
 console.log(valueInNumber)

 score = true
 console.log(typeof score)
valueInNumber = Number(score)
console.log(typeof valueInNumber)
 console.log(valueInNumber)

 score = false
 valueInNumber = Number(score)
 console.log(valueInNumber)

 score = "Umar"
 valueInNumber = Number(score)
 console.log(valueInNumber)

 //"33"==>33
 //"33abc==> NaN"
 //true ==> 1 ; false ==> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

 isLoggedIn = ""
 booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn)



 isLoggedIn = "Umar"
 booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);
 
 // 1 ==> true; 0==> false
 //"" ==>false
 //"Hitesh"==>true

 let someNumber = 33

 let stringNumber = String(someNumber)
 console.log(stringNumber)
 console.log(typeof stringNumber)




//NaN not a number