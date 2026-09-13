/*************************RANDOM INVOICE GENERATOR********************** */

let customerFirstName = "  Umar  "
let customerLastName = "  Khan  "

let itemName = "  Wireless Mouse  "
let itemPrice = 799
let quantity = 2

let discountPercent = 15
let gstPercent = 18
let min = 10000
let max = 99999
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

let invoiceDate = new Date()

let customerName = customerFirstName.trim() + " " + customerLastName.trim()
let initials = customerFirstName.trim().charAt(0) + customerLastName.trim().charAt(0)
let particularItem = itemName.trim().toUpperCase()
let subTotal = itemPrice * quantity
let discountAmount = subTotal * discountPercent / 100
let priceAfterDiscount = subTotal - discountAmount
let gst = priceAfterDiscount * gstPercent / 100
let finalBill = priceAfterDiscount + gst
let doubleFinal = 2 * finalBill
let halfFinal = finalBill / 2
let absoluteDifference = 5000 - finalBill



console.log("INV -",randomNumber);
console.log("Customer:", customerName);
console.log("Initials:", initials);

console.log("Item:", particularItem );
console.log("Price:", itemPrice);
console.log("Quantity:", quantity);

console.log("Subtotal:", subTotal);
console.log("Discount:", discountAmount.toFixed(2));
console.log("After Discount:", priceAfterDiscount.toFixed(2));
console.log("GST:", gst.toFixed(2));
console.log("Final Bill:", finalBill.toFixed(2));

console.log("Double Bill:", doubleFinal.toFixed(2));
console.log("Half Bill:", halfFinal.toFixed(2));
console.log("Difference from 5000 Rs.:", Math.abs(absoluteDifference).toFixed(2));
console.log("Invoice Date:", invoiceDate.toLocaleString("en-IN" , { timeZone: "Asia/Kolkata"}));
console.log(invoiceDate.getDay());
console.log(invoiceDate.getMonth() + 1);
console.log(invoiceDate.getFullYear());
console.log(invoiceDate.getTime());




