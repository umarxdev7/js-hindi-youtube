/************************Movie Ticket Booking System*************************** */

let firstName = "  Umar  "
let lastName = "  Khan  "

let movieName = "  Avengers Endgame  "

let ticketPrice = 250
let ticketQuantity = 4

let snackPrice = 180
let snackQuantity = 2

let discountPercent = 10
let gstPercent = 18

let bookingDate = new Date()

let min = 10000
let max = 99999

let customerName = firstName.trim() + " " + lastName.trim()
let initials = customerName.charAt(0) + customerName.charAt(5)
let movie = movieName.trim().toUpperCase()
let ticketTotal = ticketPrice * ticketQuantity
let snackTotal = snackPrice * snackQuantity
let totalItems = ticketQuantity + snackQuantity
let subTotal = ticketTotal + snackTotal
let discount = subTotal * discountPercent / 100
let priceAfterDiscount = subTotal - discount
let gst = priceAfterDiscount * gstPercent / 100
let finalAmount = priceAfterDiscount + gst
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
let doubleFinal = 2 * finalAmount
let halfFinal = finalAmount / 2
let difference = 2000 - finalAmount

console.log("Booking ID: BOOK-", randomNumber);

console.log("Customer:", customerName);
console.log("Initials:", initials);

console.log("Movie:", movie);

console.log("Ticket Price:", ticketPrice);
console.log("Ticket Quantity:", ticketQuantity);
console.log("Ticket Total:", ticketTotal);

console.log("Snack Price:", snackPrice);
console.log("Snack Quantity:", snackQuantity);
console.log("Snack Total:", snackTotal);

console.log("Total Items:", totalItems);

console.log("Subtotal:", subTotal);
console.log("Discount:", discount.toFixed(2));
console.log("After Discount:", priceAfterDiscount.toFixed(2));
console.log("GST:", gst.toFixed(2));

console.log("Final Amount:", finalAmount.toFixed(2));

console.log("Double Amount:", doubleFinal.toFixed(2));
console.log("Half Amount:", halfFinal.toFixed(2));
console.log("Difference from ₹2000:", Math.abs(difference).toFixed(2));

console.log("Booking Date:", bookingDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
}));
console.log("Booking Day:", bookingDate.getDay());
console.log("Booking Month:", bookingDate.getMonth() + 1);
console.log("Booking Year:", bookingDate.getFullYear());
console.log("Timestamp:", bookingDate.getTime());






















