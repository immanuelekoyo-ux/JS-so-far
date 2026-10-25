//Functions
//Functions are block of reusable codes that performs specific tasks.
//Function declaration: a traditional way of defining functions using the function keyword.
//example- 
function greet(params) {
    console.log("Hello World") 
}
greet();

//2.
function sum (params) {
    let x = 10;
    let y = 20;
    let z = x + y;
    console.log(z)
}
sum();

//Function Expression
let greeting = function () {
    console.log("Hello JavaScript")
}
greeting();

//Arrow Function
let multiply = () => {
    let result = 10 * 5;
    console.log(result);
}
multiply();

//function with Parameter and Argument
 let Greet = function (name) {
    console.log("Hello " + name);
 }
Greet("Michael");
Greet("Joy");
Greet("Grace");

function firstname (name) {
    console.log( name + "Uche")
}
firstname("John")

let ageCalc = (year) => {
    let currentyear = 2026;
    let age = currentyear - year;
    console.log("you're " + age + " years old");
}
ageCalc(1996);
ageCalc(2006);
ageCalc(2005);



let add = (a, b) => {
    let result = a + b;
    console.log(result);
}
add(10, 5);
add(51, 80);

//return function
function subtract (a, b){
    let ans = a - b;
    return ans;
}
let c = subtract(50, 10,);
console.log(c);

//function capitalize (){
   // let word = "good morning";
   // let capitalize = word[0].toUPperCase() + word.slice(1);
   // console.log(capitalize)
//}
//capitalize();
