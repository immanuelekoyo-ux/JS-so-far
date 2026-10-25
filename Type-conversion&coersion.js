//conversion and coersion
//explicit conversion
let numstring = "100";
let num = Number(numstring); //explicit conversion from string to number
console.log(typeof numstring);
console.log(typeof num);
console.log(num);

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


//string in JS
//string declaration
let txt = "Hello World"; 
let str = 'Hello JavaScript';
let text = `Hello Programming`;
console.log(text.length);

let name = "john";
let result = `Hello ${name}`;
console.log(result);

let emptystring = "";

//string concatentation
let firstname = "Michael";
let lastname = "Doe";
let fullname = firstname + "" + lastname;
console.log(fullname);

let greet = "Hello";
greet += "javascript";
console.log(greet);

//Accessing string values
let str1 = "Hello World";
console.log(str1[6]); // W
console.log(str1[3]); // l

console.log(str1.charAt(2));
console.log(str1.toUpperCase()); //turns str1 to uppercase
console.log(str1.toLowerCase()); // turns str1 to lowercase
console.log(str1.indexOf("1" , 6)); // 6
console.log(str1.includes("World")); // true

let age = 30;
let message =`My name is ${name} and I am ${age} years old.`;
console.log(message);


let str2 = `<div>

            </div>`;
let multiline = `This is a string
that spans multiple lines`;
console.log(multiline);

let text1 = "he's a boy";
let input = "<input type= 'text'>";
let input1 = '<input type= "text">';
let input3 = "<input type= \"text\">";
console.log(input3);

//capitalize string

let word = "hello"
let res = word[0].toUpperCase() + word.slice(1);
console.log(res)

//Functions
//Functions are block of reusable codes that performs specific tasks.
//Function declaration: a traditional way of defining functions using the function keyword.
//example- 