//operators in javascript

//arithmetic operators
//addition
let a = 2+5;
console.log(a);

//subtraction
let b = 10-3;// subtraction operator gives the difference of two numbers
console.log(b);

//multiplication
let c = 4*6;// multiplication operator gives the product of two numbers
console.log(c);

//division
let d = 12/4;// division operator gives the quotient of a division
console.log(d);

//modulus
let e = 10 %3 ; //modulus operator gives the remainder of a division
console.log(e);

//exponentiation
let f = 2**3;// exponentiation operator gives the result of raising a number to a power
console.log(f);

//assignment operators //the assignment operator (=) assigns a value to a variable
//= 
let g =5;
console.log(g);

//examples
//Addition assignment 
let h = 5; 
h += 3; // h = h + 3
console.log(h);

//Subtraction assignment
let i = 10;
i -= 4; // i = i - 4
console.log(i);

//Multiplication assignment
let j = 6;
j *= 2; // j = j * 2
console.log(j);

//Division assignment
let k = 20;
k /= 5; // k = k / 5
console.log(k);

//Modulus assignment
let l = 15;
l %= 4; // l = l % 4 //when 15 is divided by 4, the remainder is 3
console.log(l);

//exponentiation
let m = 2**3; //2^3 // 2 raised to the power of 3 is 8
console.log(m);

//Assignment Operators
//multiplication assignment 
let n = 4;
n *= 3; // n = n * 3
console.log(n);

//division assignment
let o = 12;
o /= 4; // o = o / 4
console.log(o);

//modulus assignment //modulus assignment operator assigns the remainder of a division to a variable
let p = 10;
p %= 3; // p = p % 3
console.log(p);

//comparison operators
//equal to
let q = "5";
let r = 5;
console.log(q == r); // true 
//which means that the value of q is equal to the value of r, but not necessarily the same type

//strictly equal to
let s= "5";
let t = 5;
console.log(s === t); // false
//which means that the value of s is strictly equal to the value of t, and they must be of the same type


//not equal to !=
let u = "5";
let v = 5;
console.log(u != v); // false
//! means not equal to, so the value of u is not equal to the value of v, but not necessarily the same type

//strictly not equal to !==
let w = "5";
let x = 5;
console.log(w !== x); // true
//which means that the value of w is strictly not equal to the value of x, and they must be of the same type

//greater than
let y = "5";
let z = 5;
console.log(y > z); // false
//javaScript will convert the string "5" to a number 5, and then compare the two values. Since 5 is not greater than 5, the result is false.

//greater than or equal to
let a1 = 5;
let b1 = "5";
console.log(a1 >= b1); // true
//which means that the value of a1 is greater than or equal to the value of b1, but not necessarily the same type

//less than
let c1 = "5";
let d1 = 5;
console.log(c1 < d1); // false
//which means that the value of c1 is less than the value of d1, but not necessarily the same type

//less than or equal to
let e1 = "5";
let f1 = 5;
console.log(e1 <= f1); // true
//which means that the value of e1 is less than or equal to the value of f1, but not necessarily the same type


//logical operators 
// AND &&
// TRUE && TRUE = TRUE
// TRUE && FALSE = FALSE
// FALSE && TRUE = FALSE
// FALSE && FALSE = FALSE

let g1 =true && true && true;
console.log(g1); // true


let h1 = 5 > 3 && 10 < 15;
console.log(h1); // true

//OR ||
//TRUE || TRUE = TRUE
//TRUE || FALSE = TRUE
//FALSE || TRUE = TRUE
//FALSE || FALSE = FALSE

let i1 = 10 == "10" || 5 > 10;
console.log(i1); // true
//the first condition is true, so the whole expression is true

//NOT ! //which negates the value of a boolean expression
//!TRUE = FALSE
//!FALSE = TRUE
let j1 = !true; // negates the value of true, so it becomes false
console.log(j1); // false
let k1 = !false; // negates the value of false, so it becomes true
console.log(k1); // true

//combine all logical operators
let l1 = !(5 > 3 && 10 < 15) || (10 == "20");
// the first condition means that 5 is greater than 3 and 10 is less than 15, which is true, 
// but the NOT operator (!) negates it to false. 
// The second condition means that 10 is equal to "20", which is false. So the whole expression is false OR false, which is false. 
// But since we have a NOT operator in front of the first condition, 
// it becomes true OR false, which is true.
console.log(l1); // true

//ternary operator //means that if the condition is true, then the first value is returned, otherwise the second value is returned
let age = 25;
let canvote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canvote); // Yes, you can vote.

let num = 7; // Example number
let result = (num % 2 === 0) ? "Even" : "Odd";
//the (%) operator means modulus, which returns the remainder of a division 
// while (===) means strictly equal to, which checks if the value and type are the same.
//therefore, if the remainder of num divided by 2 is strictly equal to 0, then the number is even, otherwise it is odd.
console.log(result); // Odd

//conversion and coersion
//explicit conversion
let numstring = "100";
let num0 = Number(numstring); //explicit conversion from string to number
console.log(typeof numstring);
console.log(typeof num0);
console.log(num0);

let num1 = 10;
let boolean1 = Boolean(num1); //therefore, the number 10 is converted to a boolean value of true, since any non-zero number is considered true in JavaScript.
console.log(typeof boolean1);
console.log(boolean1);

//if the number is 0, it will be converted to false
let numm = 0;
let booleann = Boolean(numm); //therefore, the number 0 is converted to a boolean value of false, since 0 is considered false in JavaScript.
console.log(typeof booleann);
console.log(booleann);

//Type coercion also implicite conversion
let result1 = "5" + 5; //the number 5 is coerced to a string, and the two strings are concatenated to form "55"
console.log(result1); // "55"
console.log(typeof result1);

let total = "5" - 3;
console.log(total);
console.log(typeof total);

console.log(5 == "5");
