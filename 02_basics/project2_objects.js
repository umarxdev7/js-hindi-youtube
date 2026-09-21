/**************STUDENT PROFILE MANAGER***************** */

let personal = {
    name: "Umar",
    age: 21,
    location: {
        city: "Jalgaon",
        state: "Maharashtra"
    }
}

let academic = {
    branch: "IT",
    year: 3,
    skills: ["JavaScript", "HTML", "CSS"]
}
let studentProfile = Object.assign({}, personal, academic)

    studentProfile.intro = function(){
        console.log(`${this.name} is an ${this.branch} student from ${this.location.city}`);
        
 
    }
    

    

let property = "branch"
let studentCopy = {
    ...studentProfile
}
console.log(studentProfile.name.length);
console.log(studentProfile.name.toUpperCase());
console.log(typeof studentProfile.age);
console.log(studentProfile.location.city);
console.log(studentProfile.branch.toUpperCase());
console.log(studentProfile.skills.length);
console.log(studentProfile.skills[0].toUpperCase())
console.log(studentProfile[property]
);
studentProfile.location.city = "Pune"
studentProfile.year = 3
studentProfile.college = "GH Raisoni"
studentProfile.status = "Learning"
console.log(studentProfile.hasOwnProperty("skills"));
console.log(studentProfile.hasOwnProperty("github"));

console.log(Object.keys(studentProfile));
console.log(Object.values(studentProfile));
console.log(Object.entries(studentProfile));

delete studentProfile.college
console.log(studentProfile.hasOwnProperty("college"));
studentCopy.status = "Ready for Internship"
console.log(studentCopy.status);

console.log(studentProfile.status);




/*********************Shopping Cart and Billing System ****************************8*/


let cart = {
    customer: "Umar",

    items: [
        {
            name: "Laptop",
            price: 55000 ,
            quantity:  1
        },
        { 
            name: "Mouse",
            price: 1200,
            quantity: 2

        },
        {
            name: "Keyboard",
            price: 2500,
            quantity: 1
        }
    ],
    getTotal: function(){
             return (this.items[0].price * this.items[0].quantity) +
                    (this.items[1].price * this.items[1].quantity) +
                    (this.items[2].price * this.items[2].quantity)
    },
    discount : 10,
    getDiscountTotal: function(){
        
        return  this.getTotal() - this.getTotal() * this.discount / 100
               
    },
    generateBill: function(){
        return (`Customer: ${this.customer}
      Subtotal: ${this.getTotal()}
      Discount: ${this.discount}
      Final Total: ${this.getDiscountTotal()}`)
              
    }
    

}
let property1 = "customer"

let laptop = cart.items[0].price * cart.items[0].quantity
let mouse = cart.items[1].price * cart.items[1].quantity
let keyboard = cart.items[2].price * cart.items[2].quantity
let subTotal = laptop + mouse + keyboard
console.log(cart.customer.toUpperCase());
console.log(cart.items.length);
console.log(cart.items[0].name);
console.log(typeof cart.items[0].price);
console.log(cart.items[1].quantity);

console.log("Laptop:",laptop);
console.log("Mouse:",mouse);
console.log("Keyboard:",keyboard);
console.log("SubTotal:", subTotal);

console.log("SubTotal:", cart.getTotal());
console.log("Discount Percent:", cart.discount);

console.log("Total Price (After Discount):",cart.getDiscountTotal());


console.log("Bill:", cart.generateBill());
console.log(Object.keys(cart));
console.log(Object.values(cart));
console.log(Object.entries(cart));

console.log(cart.hasOwnProperty("discount"));
console.log(cart.hasOwnProperty("coupon"));
console.log(cart[property1]);
console.log(cart.items[1].name.toUpperCase());



/*****************************Developer Profile And Job Manager**************************************** */

let personalInfo = {
    name: "Umar",
    age: 21,
    location: {
        city: "Jalgaon",
        state: "Maharashtra"
    }
}

let careerInfo = {
    role: "Cloud Developer",
    skills: ["JavaScript", "Docker", "AWS"],
    experience: 1,
    salary: 80000
}
let developer = Object.assign({}, personalInfo, careerInfo)
    developer.intro =  function(){
        console.log(`${this.name} is a ${this.role} from ${this.location.city}`);
        
    }
    developer.getAnnualSalary = function(){
        return this.salary * 12
        
    }
    developer.generateProfile = function(){
        return `Name: ${this.name}
        Role: ${this.role}
        location: ${this.location.city},${this.location.country}
        Skills: ${this.skills.length}
        Experience: ${this.experience}
        Annual Salary: ${this.getAnnualSalary()}
        Status: ${this.status} `
        
    }
    

let developerCopy = {
    ...developer
}
let property2 = "name"



console.log(developer.name);
console.log(developer.name.length
);
console.log(typeof developer.age);
console.log(developer.location.city);
console.log(developer.role.toUpperCase());
console.log(developer.skills.length);
console.log(developer.skills[0].toUpperCase());
console.log(developer[property2]);
developer.location.city = "Pune"
developer.status = "Learning"
developer.college = "GH Raisoni"
console.log(developer.hasOwnProperty("skills"));
console.log(developer.hasOwnProperty("github"));
console.log(developer.hasOwnProperty("salary"));




console.log(Object.keys(developer));
console.log(Object.values(developer));
console.log(Object.entries(developer));

developer.intro()

developer.getAnnualSalary()
console.log(developer.getAnnualSalary());


developer.location.country = "India"
console.log(developer.location.city);
console.log(developer.location.country);
developerCopy.status = "Ready for Internship"
console.log(developer.status);
console.log(developerCopy.status);

delete developer.college
console.log(developer.hasOwnProperty("college"));
console.log(developer.generateProfile());
