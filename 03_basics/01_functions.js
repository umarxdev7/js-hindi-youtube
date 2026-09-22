function sayHello() {
    console.log("Hello Umar");// abhi ye run nahi hoga call karna hoga
}
//this is function declaration

sayHello(); //calling before running
//this is function calling

function welcome() {
    console.log("Welcome Umar");
    
}
welcome()
//lekin agar hame ronaldo, messi ya umar ko welcome karna ho
//tab ham use karenge parameters

function welcome(name) {    //here name is parameter
    console.log("Welcome", name);
    
}
welcome("Umar")   // "Umar" = argument
welcome("Ronaldo")
welcome("Messi")
//parameter ==> function ke andar input lene wala variable


/***********************Multiple Parameters**************** */
function addNumbers(num1,num2){   //num1, num2 ==>parameters
     console.log("The addition is:", num1 + num2);
     
}
addNumbers(10, 20) // 10, 20 ==> Arguments
addNumbers(7, 7)

function introduce(name, age) {
    console.log("name is:", name, "and age is:", age);
    
}
introduce("Umar", 21)

/****************************RETURN************************ */
//ham function ke andar log use kar rhe the lekin function value wapas bhi de skta h
 function add(a, b) {
    return a + b
 }
 let result = add(7, 7)
 console.log(result);
 
 //Yahan return ka matlab:

//Function ke andar calculated value ko function ke bahar bhej do.

function multiply(a, b) {
    return a * b
}
let output = multiply(7, 7)
console.log(output);

/************************DEFAULT PARAMETERS****************** */
function greet(name){
    console.log("Hello", name);
    
}
greet() //no argument in greet
//o/p==> Hello undefined

function greet(name = "Umar") { // parameter me hamne default value rakhi h "Umar"
    console.log("Hello", name);
    
}
greet() //no argument 
//o/p==> Hello Umar
greet("Ronaldo") // o/p ==> Hello Ronaldo

//matlab agar hamne argument bhi nahi diya aur default parameter 
//bhi nahi diya to undefined aayega aur default parameter deke argument
//nahi diya to default parameter print hoga.aur agar argument de diya to 
//argument print hoga

function welcome(name = "Umar"){
    console.log("Welcome", name);
    
}
welcome()
welcome("Ronaldo") 

/***********function with multiple parameters + return************ */

function calculatedPrice(price, quantity = 1){ //quantity = default parameter
    return price * quantity
}
console.log(calculatedPrice(500)); // yaha hamne sirf price diya no quantity to wo use karega 1 (default)
//o/p = 500
console.log(calculatedPrice(500, 4)); //both price and quantity
//o/p = 2000


function calculatedBill(price , quantity = 1) {
    return price * quantity
}
console.log(calculatedBill(1000));
console.log(calculatedBill(1000, 3));


/*******************RETURN KE BAAD CODE******************* */
function test() {
    return "Hello";

    console.log("Umar");
}
console.log(test()); // Hello
// return execute hote hi function wahi stop ho jata hai uske bad ka code execute nahi hota


/***************************If/else************************* */

function checkNumber(number) {
    if(number>0) {
        return "Positive"
    
    } else{
        return "Negative"
    }
} 


console.log(checkNumber(7));
console.log(checkNumber(3));
console.log(checkNumber(-4));


//we use else if agar 2 se zyada situations ho
function checkMarks(marks) {
    if (marks >= 90) {
        return "A"
    }
    else if (marks >= 75) {
        return "B"
    }
    else if (marks >= 50) {
        return "C"
    }
    else {
        return "Fail"
    }
}
console.log(checkMarks(93.75));
console.log(checkMarks(35));


function checkAge(age) {
    if (age >= 18) {
        return "Adult"
    }
    else if (age >= 13) {
        return "Teenager"
    }
    else {
        return "Child"
    }
}
console.log(checkAge(4));
console.log(checkAge(14));
console.log(checkAge(22));



/***********************! operator checking************************ */

function loginUser(userName) {
    if(!userName) {
        return "Please enter username"
    }
    return `${userName} logged in`
}
console.log(loginUser());
console.log(loginUser("Umar"));
//! iska matlab hai not
//!userName matlab username nahi hai to return karo ki please enter username

 

function welcome(name){
    if (!name) {     // !name = agar name nahi hai
        return "Please enter your name"
    }
    else {
        return `Name: ${name}`
    }
 }
 console.log(welcome());
 console.log(welcome("Umar"));
 


 
 
 function introduce(name, branch) {

    if (!name) {
        return "Name is required";
    }

    if (!branch) {
        return "Branch is required";
    }

    return `${name} is from ${branch}`;
}

console.log(introduce("Umar", "IT"));
console.log(introduce("Umar"));
console.log(introduce());