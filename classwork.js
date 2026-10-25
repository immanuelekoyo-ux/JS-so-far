//Task 1
let name = "immanuel ekoyo";
console.log(name)

let age1 = 20;
console.log(age1)

let gender = "male";
console.log(gender)

let state = "ebonyi";
console.log(state)

let course = "web development";
console.log(course)

let isStudent = true;
let result = isStudent ? "Yes, I am a student" : "No, I am not a student";
console.log(result)

//Task 2
let firstName = "john";
console.log(firstName)

let lastName = "doe";
console.log(lastName)

let age = 20;
console.log(age)

let response = (firstName === "john" && lastName === "doe" && age === 20) ? "My name is John Doe and I am 20 years old." : "You are not John Doe or you are not 20 years old.";
console.log(response)

//Task 3
//sum
let number1 = 50;
let number2 = 10;
let sum = number1 + number2;
console.log(sum)

//difference
let difference = number1 - number2;
console.log(difference)

//product
let product = number1 * number2;
console.log(product)

//quotient
let quotient = number1 / number2;
console.log(quotient)

//remainder
let remainder = number1 % number2;
console.log(remainder)

//TASK 4
let shirt = 15000;
let trouser = 20000;
let shoe = 35000;
let totalamount = shirt + trouser + shoe;
console.log("The total amount is: " + totalamount)
let discount = totalamount - 5000;
console.log("The total amount after discount is: " + discount)

//TASK 5
let mathematics = 75;
let english = 68;
let computer = 82;
let totalscore = mathematics + english + computer;
console.log("The total score is: " + totalscore);

let average = totalscore / 3;
console.log("The average score is: " + average)

let highestPossibleScore = 100 * 3; 
console.log("The highest possible score is: " + highestPossibleScore)

let percentage = (totalscore / highestPossibleScore) * 100;
console.log("The percentage score is: " + percentage + "%")

//TASK 6
let age2 = 22;
let isoldenough = (age2 >= 18 && age2 !== 25) ? "This person is above 18 or older" : "This person is below 22 years old";
console.log(isoldenough)

//let isnotup25 = age2 < 25 ? "This person is below and not equal to 25 years old" : "This person is above 25 years old";
//console.log(isnotup25)

//TASK 7
let a = 10;
let b ="10";
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b)

//== means that the value of a is equal to the value of b, but not necessary the same type.
// === means that the value of a is strictly equal to the value of b, and they must be of same type.
//!= means that the value of a is not equal to the value of b, but not necessarily the same type.
//!== means that the value of a is strictly not equal to the value of b, and they must be of same type.

//TASK 8
let age3 = 25;
let hasID = true;
let isolderthan18 = (age3 >= 18 && hasID === true) || (age3 < 18 || hasID === true) || (hasID !== true) ? "This person is older than 18 and has an ID" : "This person is younger than 18 or does not have an ID";
console.log(isolderthan18)

//TASK 9

// Task 9 - Salary Calculator

let employeeName = "John";
let basicSalary = 100000;
let transportAllowance = 20000;
let housingAllowance = 30000;
let tax = 15000;

// Calculate Gross Salary
let grossSalary = basicSalary + transportAllowance + housingAllowance;

// Calculate Net Salary
let netSalary = grossSalary - tax;

// Salary Statement
console.log("Salary Statement");
console.log("Employee Name:", employeeName);
console.log("Basic Salary:", basicSalary);
console.log("Transport Allowance:", transportAllowance);
console.log("Housing Allowance:", housingAllowance);
console.log("Gross Salary:", grossSalary);
console.log("Tax:", tax);
console.log("Net Salary:", netSalary);

// Task 10 - Mini Challenge

let age = 20;
let examScore = 75;
let hasCertificate = true;

let eligibleForAdmission =
    age >= 18 && examScore >= 50 && hasCertificate;

console.log("Eligible for Admission:", eligibleForAdmission);