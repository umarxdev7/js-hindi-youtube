/**************************MINI SHOPPING CART*********************/


let customerFirstName = "  Umar  "
let customerLastName = "  Khan  "

let item1 = "  Keyboard  "
let price1 = 1299
let quantity1 = 1

let item2 = "  Mouse  "
let price2 = 799
let quantity2 = 2

let item3 = "  USB Cable  "
let price3 = 299
let quantity3 = 3

let discountPercent = 10
let gstPercent = 18

let min = 10000
let max = 99999
let randomNumber = Math.floor(Math.random() * ( max - min + 1) + min)


let orderDate = new Date()

let customerName = customerFirstName.trim() +  " " + customerLastName.trim()
let initials = customerFirstName.trim().charAt(0) + customerLastName.trim().charAt(0)
let keyboard = item1.trim().toUpperCase()
let itemKTotal = price1 * quantity1

 let mouse = item2.trim().toUpperCase()
 let itemMTotal = price2 * quantity2

 let uSB = item3.trim().toUpperCase()
 let itemUTotal = price3 * quantity3

 let subTotal = itemKTotal + itemMTotal + itemUTotal
 let totalQuantities = quantity1 + quantity2 + quantity3
 let discount = subTotal * discountPercent / 100
 let priceAfterDiscount = subTotal - discount
 let gst = priceAfterDiscount * gstPercent / 100
 let finalBill = priceAfterDiscount + gst
 let doubleFinal =  finalBill * 2
 let halfFinal = finalBill / 2
 let finalDifference = 5000 - finalBill
 

 console.log("Order ID: ORD-",randomNumber );
 
 console.log("Customer:", customerName);
 console.log("Initials:", initials);

 console.log(keyboard);
 console.log("Price:", price1);
 console.log("Quantity:", quantity1);
 console.log("Total", itemKTotal);
 
 console.log(mouse);
 console.log("Price:", price2);
 console.log("Quantity:", quantity2);
 console.log("Total:", itemMTotal);

 console.log(uSB);
 console.log("Price", price3)
 console.log("Quantity:", quantity3);
 console.log("Total:", itemUTotal);

 console.log("Total Quantity:", totalQuantities);
 console.log("Subtotal:", subTotal);

 console.log("Discount:", discount.toFixed(2));
 console.log("After Discount:", priceAfterDiscount.toFixed(2));

 console.log("GST:", gst.toFixed(2));
 console.log("Final Bill", finalBill.toFixed(2));
 
 console.log("Double Bill:", doubleFinal.toFixed(2));
 console.log("Half Bill:", halfFinal.toFixed(2));
 console.log("Difference from Rs.5000:", Math.abs(finalDifference).toFixed(2));

console.log("Order Date:", orderDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
}));
console.log("Order Day:", orderDate.getDay());
console.log("Month:", orderDate.getMonth() + 1);
console.log("Year:", orderDate.getFullYear());
console.log("Timestamp:", orderDate.getTime());





 
 
 
 
 
 
 
 
 
 
 
 
 
 
 