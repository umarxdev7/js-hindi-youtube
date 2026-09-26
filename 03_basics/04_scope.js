//sirf scope
//function one () {
 // let name = "Umar"
  // console.log(name);
    
//}
  //one ()
 //o/p ==> Umar , kyuki name braces ke andar hai

 /********************NESTED SCOPE***************** */
 //function ke andar function....

let a = 10
function one() {
    let b = 20
    console.log(b);
    

    function two() {
        let c = 30

        console.log(a)
        console.log(b)
        console.log(c)
    }

    two()  
}

one()     
//pehle one()call usme kuch nahi fir two() call



/*********************Function Declaration************** */
function addOne(num) {
    return num + 1
}
//function==> js ko batara ke hamne function bnaye
//addOne ==> function ka naam
//num ==> parameter
//return ==> function ki value return karta 

console.log(addOne(5)); //6

//declaration me ham ye log wala part pehle bhi kar skte hai



console.log(addOne(5)) //yaha pehle hi call kar diya no error

function addOne(num) {
    return num + 1
}




/********************Function Expression**************** */
//function ko variable ke andar store kar skte hai

const addTwo = function (num){
    return num + 2
}
console.log(addTwo(7)); //9




//console.log(addTwo1(10))

//const addTwo1 = function(num) {
 //   return num + 2
//} //yaha error ayega cannot access before initialization meri jaan




/*🔑 Bas ye difference yaad rakh:

Function declaration → pehle call kar sakte ho.
const function expression → initialization se pehle call nahi kar sakte.*/



/****************RETURN DEKH BETA**************** */
function add(a, b) {
    return a + b
}

console.log(add(10, 20))
//return matlab function jo value calculate kar rha hai usko function ke bahar wapas bhejdo


//return ke baad function stop bhi ho jata hai
function test() {
    return 10

    console.log("Hello")
}

console.log(test()) //only 10 no hello




function test() {
    console.log("Hello")
    return 10
    console.log("Umar")
}

console.log(test())
//o/p ==> Hello, 10


/***************************FINAL PRACTICE***************************** */

let name = "Umar"

function one() {
    let age = 21

    function two() {
        return age
    }

    return two()
}

console.log(one())
//op==>21




let x = 10

function one() {
    let x = 20

    function two() {
        return x + 5
    }

    return two()
}

console.log(one()) // o/p ==> 25

