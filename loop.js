//Ternary Operators
//let age = 20;
//let isAdult = (age >= 18) ? "True" : "False";
//console.log(isAdult);

//  If-Else Statement
//if (age >= 18) {
//    console.log("True");
//}else {
  //  console.log("False");
//}

//Ternary Operators
let age = 20;
let isAdult = (age >= 18) ? "True" : "False";
console.log(isAdult);

//  If-Else Statement
if (age >= 18) {
    console.log("True");
} else {
    console.log("False");
}

//bOOLEAN
let studentQualified = 'qualified';

if (studentQualified !== 'qualified') {
    console.log("Student is qualified.");
} else {
    console.log("Student is not qualified.");
}

let studentAge = 20;
console.log(studentAge !== 18 ? "Student is not 18 years old." : "Student is 18 years old.");

//loops
//loops are used to repeat a block of code until a certain condition is met. 
// There are different types of loops in JavaScript, 
// including for loops, while loops, and do-while loops.

//for loop is used to repeat a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log(i); //++ means increment by 1
}

let cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//console.log(cars[0]); same as console.log(cars[i]);
//console.log(cars[1]);
//console.log(cars[2]);
//console.log(cars[3]);
//console.log(cars[4]);

//While loop is used to repeat a block of code while a certain condition is true.
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}
console.log('hello');

// Class Assignment: If Statements, Ternary Operators, For Loops, and While Loops
//
// Create a student grade checker for five students.
//
// Requirements:
// 1. Create an array containing five student names and an array containing their
//    corresponding test scores.
// 2. Use a for loop to visit every student and display their name and score.
// 3. Use an if statement to display "Pass" when a score is 50 or higher and
//    "Needs Improvement" when the score is below 50.
// 4. Use a ternary operator to display "Excellent" when a score is 80 or higher;
//    otherwise display "Keep Practicing".
// 5. Use a while loop to count and display how many students passed.
// 6. At the end, display the total number of students who passed.
//
// Example output:
// Alex: 85 - Pass - Excellent
// Sam: 42 - Needs Improvement - Keep Practicing
// Students who passed: 1
//
// Bonus: Calculate and display the class average.


//1
//let studentNames = ['Alex', 'Sam', 'Jordan', 'Taylor', 'Casey'];
//console.log(studentNames);
//let studentScores = [85, 42, 78, 90, 55];
//console.log(studentScores);

//2
//for (let s = 0; s < studentNames.length; s++) {//
   // console.log(studentNames[s] + ": " + studentScores[s]);
//}


//for (let i = 0; i < studentScores.length; i++) {
   
    //if (studentScores >=50) {
    //    console.log('pass')
    //} else if (studentScores < 50) {
    //    console.log('Needs improvement')
   // }
    //console.log(studentNames[i] + ' : ' + studentScores[i] + ' - pass');
//}

//if (studentScores >= 50) {
    //console.log('pass');
//} else if (studentScores < 50) {

//}
//console.log();
 //   }
//console.log(studentNames[i] + ' : ' + studentScores[i] + ' - pass');

//3
//for (let i = 0; i < studentScores.length; i++) {
 //   if (studentScores[i] >= 50) {
  //      console.log(studentNames[i] + ": " + studentScores[i] + " - Pass");
   // } else {
  //      console.log(studentNames[i] + ": " + studentScores[i] + " - Needs Improvement");
  //  }
//}

//CORRECTION
const students = [
    { name: 'Alex', score: 85 },
    { name: 'Sam', score: 42 },
    { name: 'Jordan', score: 78 },
    { name: 'Taylor', score: 90 },
    { name: 'Casey', score: 55 }
];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student);
    //creating the if statement to check the score of each student
    if (student.score >= 50) {
        console.log('Pass');
    } else {
        console.log('Needs Improvement');
    }
    //creating the ternary operator to check the score of each student
    const performance = (student.score >= 80) ? 'Excellent' : 'Keep Practicing';
    console.log(performance);

    console.log(student.name + ": " + student.score + " - " + (student.score >= 50 ? "Pass" : "Needs Improvement") + " - " + performance);
}

//5
let studentIndex = 0;
let studentswhoPassed = 0;

while (studentIndex < students.length) {
    if(students[studentIndex].score >= 50){
        studentswhoPassed++;
    }
    studentIndex++;
}

console.log('students who passed:' + studentswhoPassed);

