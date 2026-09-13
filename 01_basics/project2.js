/******************BILL CALCULATOR*******************/

/*
let itemPrice = 499
let quantity = 3
let total = itemPrice * quantity
let discount = total * 10/100
let finalPrice = total - discount

console.log("Item Price:", itemPrice);

console.log("Quantity:", quantity);

console.log("Total Price:", total);

console.log("Discount:", discount);

console.log("Final Price:", finalPrice.toFixed(2)); */



let itemPrice = 499
let quantity = 3
let discountPercent = 10
let gstPercent = 18
let total = itemPrice  * quantity
let discount = total * discountPercent
let discountedPrice = total - discount
let gst = discountedPrice * gstPercent
let finalBill = discountedPrice + gst

console.log("Item Price:", itemPrice);
console.log("Quantity:", quantity);
console.log("Total Price(before GST):", total);
console.log("Discount:", discount);
console.log("Price After Discount:", discountedPrice);
console.log("GST:", gst.toFixed(2));
console.log("Final Bill(after GST):", finalBill.toFixed(2))











