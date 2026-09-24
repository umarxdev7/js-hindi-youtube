//Rest Parameter ...


function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(232,242,3412,3532,89));
//main kaam==> Multiple arguments ko ek parameter me collect karna

//multiple value ek array me collect ho jati hai

function collectItems(...items){
    return items
}
console.log(collectItems("Laptop", "Mouse", "Keyboard"));



function collectScores(...scores) {
    // yahan kya likhega?
    return scores
}

console.log(collectScores(45, 78, 92, 88))


//Normal Parameter + Rest Parameter
function showItems(first, second, ...others) {
    return `${first}, ${second}, ${others}`
}

console.log(showItems("Book", "Pen", "Bag", "Bottle", "Pencil"))
//pehle normal parameters values lete hain, aur remaining values rest parameter collect karta hai.
//first pe book and second pe pen and others pe baki sab


//Object as a function argument
const product = {
    name: "Mechanical Keyboard",
    price: 2499
}
    function showProduct(product) {
        console.log(product.name);
        console.log(product.price);
        
    }
    showProduct(product)


/***********************Direct Object as an Argument*************************/

function showProduct(product){
    console.log(product.name);
    console.log(product.price);
    
}
showProduct({
    name: "Laptop",
    price: 55000
})
//matlab hamne koi variable leke object nahi banaya 
//function call karte waqt hi object ka data rakh diya


function showOrder(order) {
    console.log(order.product)
    console.log(order.price)
    console.log(order.quantity)
}
showOrder({
    product: "Keyboard",
    price: 2499,
    quantity: 2
})


function showUser(user) {
    console.log(user.name);
    console.log(user.city);
    
}
showUser({
    name: "Umar",
    city: "Pune"
})






function movieInfo(movie) {
    return `${movie.title} | ${movie.year}`
}
console.log(movieInfo({title: "Inception", year: 2010}));




/******************Array as a function Argument***********************/

const colors = ["Red", "Blue", "Green", "Black"]
function showColors(colors){
    console.log(colors[1]);
    
}
showColors(colors)



function showPlayers(players) {
    console.log(players[0])
    console.log(players[2])
}
 showPlayers(["Umar", "Rahul", "Aman", "Rohit"])
//pura array players parameter me aa gya



function showDetails(items) {
    console.log(items[0]) //laptop
    console.log(items[2]) //Keyboard
}
showDetails(["Laptop", "Mouse", "Keyboard", "Monitor"])


/***************************Mixed Practice********************************* */
function showStudent(bacche){
    console.log(bacche.name);
    console.log(bacche.branch);
    
}
showStudent({
    name: "Umar",
    branch: "IT"

})


let marks= [80, 90, 75];
  function showMarks(grades){
    return `${grades[1]}`
  }
console.log(showMarks(marks));


//objects + array

let student = {
    name: "Umar",
    marks: [80, 90, 75]
}
  function getStudentMarks(ank){
    return `${ank.name} | ${ank.marks[1]}`
  }
  console.log(getStudentMarks(student));
  



  function calculatedPrices(...prices){
    return prices
  }
  console.log(calculatedPrices(200, 400, 500, 1000));
  


  let order = {
    customer: "Umar",
    prices: [200, 400, 500]
}
   function getOrderInfo(order){
           return `${order.customer} | ${order.prices[1]}`

     }
    console.log(getOrderInfo(order));
    


    function showProduct(product) {
    return `${product.name} | ${product.price}`
}
   console.log(showProduct({name: "Football Jersey", price: 799}));
  



   function getSecondValue(arr) {
    return arr[1]
}
 console.log(getSecondValue([200, 400, 600]));
 


 function getMarks(arr) {
    return arr[1]
 }
console.log(getMarks([80, 75, 90]));