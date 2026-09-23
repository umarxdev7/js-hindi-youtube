let player = {
    name: "Ronaldo",
    age: 41,
    country: "Portugal"
}
  function getPlayerInfo(player) {
    if (!player.name) {
        return "Player name is missing"
    }
    else {
        return `${player.name} is ${player.age} years old  and plays for ${player.country}`
    }
   }
console.log(getPlayerInfo(player))




let player1 = {
    name: "Ronaldo",
    age: 41,
    country: "Portugal",
    trophies: ["UCL", "Euro", "Nations League"]
}
   function getplayerDetails(player){
     if (!player.name) {
        return "Player name is missing"
     }
     else {
        return `${player.name} | ${player.country} | First Trophy : ${player.trophies[0]}`
     }

    }
console.log(getplayerDetails(player1));

/*
🔥 Ye line yaad rakhna
function getPlayerDetails(player) {
                         ↑
                    parameter
}

Aur:

getPlayerDetails(player1)
                  ↑
                argument */


            


let student = {
    name: "Umar",
    age: 21,
    branch: "IT"
}
   function getStudentInfo(student){
    return `${student.name} | ${student.age} | ${student.branch}`
   }
console.log(getStudentInfo(student));
//ye krne se student object ki info. student parameter me ajayegi



let student1 = {
    name: "Umar",
    age: 21,
    branch: "IT"
}

let student2 = {
    name: "Himanshu",
    age: 22,
    branch: "AI"
}
   function getStudentInfo(student) {
    return `${student.name} | ${student.age} | ${student.branch}`
}
console.log(getStudentInfo(student1));
console.log(getStudentInfo(student2));




let player2 = {
    name: "Ronaldo",
    age: 41,
    country: "Portugal"
}
    function getPlayerInfo(player){
        if(!player.name) { // function ke andar kahi bhi object player means player 2 nahi dena
            return "Player name is missing"
        }
        else{
            return `${player.name} | ${player.age} | ${player.country}`
        }
    }
    console.log(getPlayerInfo(player2));// ye karne se player 2 object ka data player function me jayega
    


    let movie = {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi"
}
    function getMovieInfo(movie){
        if(!movie.title){
            return "Move title is missing"
        }
        return `${movie.title} | ${movie.year} | ${movie.genre}`
    }
    console.log(getMovieInfo(movie));
    


    let order = {
    customer: "Umar",
    product: "Mechanical Keyboard",
    price: 2499,
    quantity: 2
}
    function getOrderInfo(order){
        if (!order.product) {
            return "Product name is missing"
        }
        return `${order.customer} | ${order.product} | ${order.price} | ${order.quantity}`
    }
    console.log(getOrderInfo(order));
    


    let order1 = {
    customer: "Umar",
    price: 2499,
    quantity: 2
}
    function getOrderInfo(order){
        if (!order.product) {
            return "Product name is missing"
        }
        return `${order.customer} | ${order.product} | ${order.price} | ${order.quantity}`
    }
    console.log(getOrderInfo(order1))


    
    
    let username = "Umar Khan";
let age = 21;
let skills = ["JavaScript", "Git", "Docker"];

function getUserInfo(user, age, skills) {
    // yahan tum code likho
    return `${user} | ${age} | ${skills}`
}
console.log(getUserInfo(username, age, skills));





let user = {
    name: "Umar",
    age: 21,
    skills: ["JavaScript", "Git", "Docker"]
};

function checkUser(user) {
    if (user.age>=18) {
        return `${user.name} is eligible |  Skills: ${user.skills}`
    }
    return `${user.name} is not eligible` 
}
console.log(checkUser(user));




let users = [
    {
        name: "Umar",
        age: 21,
        skills: ["JavaScript", "Git", "Docker"]
    },
    {
        name: "Rahul",
        age: 16,
        skills: ["HTML", "CSS"]
    }

];
    function checkUser(user){
        if (user.age>=18) {

        
        return `${user.name} is eligible | Skills: ${user.skills}`
    }
    return `${user.name} is not eligible`
}
    
   console.log(checkUser(users[0]));
   console.log(checkUser(users[1]));
   



   let order2 = {
    customer: "Umar",
    product: "Football Jersey",
    price: 799,
    quantity: 2,
    paid: true
};
   function getOrderStatus(order) {
    if (order.paid==true) {
        return `${order.customer} | ${order.product} | ${order.price * order.quantity} | Payment Successful`
    }
    return `${order.customer} | ${order.product} | ${order.price * order.quantity} | Payment Pending`
}
   
console.log(getOrderStatus(order2));




let order3 = {
    customer: "Umar",
    product: "Football Jersey",
    price: 799,
    quantity: 2
};
    function getOrderInfo(order){
        if(!order.product) {
            return "Product name is missing"
        }
        return `${order.customer} | ${order.product} | ${order.price * order.quantity} | ${order.quantity}`
    }
    console.log(getOrderInfo(order3));
    


    let order4 = {
    customer: "Umar",
    product: "Football Jersey",
    price: 799,
    quantity: 2
};

let order5 = {
    customer: "Rahul",
    price: 499,
    quantity: 1
};
     function getOrderInfo(order) {
        if(!order.product){
            return "Product name is missing"
        }
        return `${order.customer} | ${order.product} | ${order.price * order.quantity} | ${order.quantity}`
     }
     console.log(getOrderInfo(order4));
     console.log(getOrderInfo(order5));
     





     let orders = [
    {
        customer: "Umar",
        product: "Football Jersey",
        price: 799,
        quantity: 2,
        paid: true
    },
    {
        customer: "Rahul",
        product: "Football Shoes",
        price: 1499,
        quantity: 1,
        paid: false
    }
];
      function getOrderInfo(order){
             if(order.paid) {  //because paid already boolean hai
                return `${order.customer} | ${order.product} | ${order.price * order.quantity} | Paid`
             }
             return `${order.customer} | ${order.product} | ${order.price * order.quantity} | Payment Pending`
     }
     console.log(getOrderInfo(orders[0]));
     console.log(getOrderInfo(orders[1]));
     