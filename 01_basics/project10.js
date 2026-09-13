/*************************PERSONAl EXPENSE MANAGER********************************* */

let firstName = "  Umar  "
let lastName = "  Khan  "

let foodExpense = 850
let travelExpense = 1200
let shoppingExpense = 2499
let entertainmentExpense = 999
let studyExpense = 1500

let monthlyBudget = 10000

let discountPercent = 5
let gstPercent = 18

let expenseDate = new Date()

let min = 10000
let max = 99999

let fullName = firstName.trim() + " " + lastName.trim()
let initials = fullName[0] + fullName[5]
let totalExpense = foodExpense + travelExpense + shoppingExpense + entertainmentExpense + studyExpense
let averageExpense = totalExpense / 5
let highestExpense = Math.max(foodExpense , travelExpense  ,shoppingExpense , entertainmentExpense , studyExpense)
let lowestExpense = Math.min(foodExpense , travelExpense , shoppingExpense , entertainmentExpense , studyExpense)
let differenceBHighAndLow = highestExpense - lowestExpense
let remainingBudget = monthlyBudget - totalExpense
let budgetUsedPercentage = totalExpense / monthlyBudget * 100
let discount = totalExpense * discountPercent / 100
let expenseAfterDiscount = totalExpense - discount
let gst = expenseAfterDiscount * gstPercent / 100
let finalExpense = expenseAfterDiscount + gst
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min) 
let doubleFinal = 2 * finalExpense
let halfFinal = finalExpense / 2
let difference = 10000 - finalExpense

console.log("Expense ID: EXP-", randomNumber);

console.log("Name:",fullName);
console.log("Initials:", initials);

//-----------------------Expenses--------------------------//

console.log("FOOD", foodExpense);

console.log("TRAVEL:", travelExpense);

console.log("SHOPPING:", shoppingExpense);

console.log("ENTERTAINMENT:", entertainmentExpense);

console.log("STUDY:", studyExpense);

//----------------------------------------------------------//

console.log("Total Expense:", totalExpense);
console.log("Average Expense:", averageExpense.toFixed(2));

console.log("Highest Expense:", highestExpense);
console.log("Lowest Expense:", lowestExpense);
console.log("Difference:", differenceBHighAndLow);

//-------------------------BUDGET----------------------------//

console.log("Monthly Budget:", monthlyBudget);
console.log("Remaining Budget:", remainingBudget);
console.log("Budget Used:", budgetUsedPercentage.toFixed(2));


//-------------------------- BILL-----------------------------//

console.log("Discount:", discount.toFixed(2));
console.log("After Discount:", expenseAfterDiscount.toFixed(2));
console.log("GST:", gst.toFixed(2));

console.log("Final Expense:", finalExpense.toFixed(2));

console.log("Double:", doubleFinal.toFixed(2));
console.log("Half:", halfFinal.toFixed(2));
console.log("Difference from ₹10000:", Math.abs(difference).toFixed(2));


//--------------------------DATE-----------------------------//

console.log("Date:",expenseDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
}) );
console.log("Day:", expenseDate.getDay());
console.log("Month:", expenseDate.getMonth() + 1);
console.log("Year:", expenseDate.getFullYear());
console.log("Time:", expenseDate.toLocaleTimeString("en-IN",{ timeZone:"Asia/Kolkata"}));
console.log("Timestamp:", expenseDate.getTime());


//--------------------------------------------------------------//















