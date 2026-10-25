/* ============================================================================
 * LESSON 05 — map(): transform every item
 * Run: node 05-map.js
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. The shape
 * ---------------------------------------------------------------------------
 *   array.map(item => newValue)
 *
 * map() runs your function on EVERY item and collects whatever it returns
 * into a BRAND NEW array. The new array is always the SAME LENGTH as the
 * original. The original array is never touched.
 * ------------------------------------------------------------------------ */

function lesson_mapBasics() {
  console.log('\n--- 1. map basics ---');

  const prices = [10, 25, 40];

  const withTax = prices.map((price) => price * 1.075);

  console.log('original:', prices);   // untouched
  console.log('with tax:', withTax);  // new array
}


/* ---------------------------------------------------------------------------
 * 2. THE CLASSIC BEGINNER BUG — forgetting to return
 * ---------------------------------------------------------------------------
 * Show this deliberately. Students write it constantly.
 * ------------------------------------------------------------------------ */

function lesson_forgettingReturn() {
  console.log('\n--- 2. Forgetting to return ---');

  const numbers = [1, 2, 3];

  // WRONG — a `{ }` function body needs an explicit `return`:
  const wrong = numbers.map((n) => {
    n * 2; // this value goes nowhere
  });
  console.log('WRONG ->', wrong); // [undefined, undefined, undefined]

  // RIGHT — either add `return`, or drop the braces for an implicit return:
  const rightA = numbers.map((n) => {
    return n * 2;
  });
  const rightB = numbers.map((n) => n * 2); // implicit return, no braces

  console.log('RIGHT (explicit) ->', rightA);
  console.log('RIGHT (implicit) ->', rightB);

  const mappArray = numbers.map((n) =>{
   return n * 2;
  })

  const mappArray2 = numbers.map((n) => n * 2);

  console.log('mappArray ->', mappArray);

  const filteredArray = mappArray.filter((n) =>{
    return n > 4;
  });

  console.log('filteredArray ->', filteredArray);

}





/* ---------------------------------------------------------------------------
 * 3. map with objects — very common in real UI code
 * ------------------------------------------------------------------------ */

function lesson_mapObjects() {
  console.log('\n--- 3. map with objects ---');

  const users = [
    { name: 'Amaka', age: 17 },
    { name: 'Tunde', age: 22 },
  ];

  const names = users.map((user) => user.name);
  const summaries = users.map((user) => `${user.name} (${user.age})`);

  console.log(names);
  console.log(summaries);
}


/* ---------------------------------------------------------------------------
 * 4. map also gives you the index, if you need it
 * ------------------------------------------------------------------------ */

function lesson_mapWithIndex() {
  console.log('\n--- 4. map with index ---');

  const items = ['apple', 'banana', 'cherry'];
  console.log(items[0]);
  console.log(items[1]);
  console.log(items[2]);
  const numbered = items.map((item, index) => `${index}. ${item}`);

  console.log(numbered);
}


/* ---------------------------------------------------------------------------
 * RUNNER
 * ------------------------------------------------------------------------ */
// lesson_mapBasics();
// lesson_forgettingReturn();
// lesson_mapObjects();
// lesson_mapWithIndex();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. Does map() change the original array?
 *   Q2. If the input array has 5 items, how many items does the map() result have?
 *   Q3. What goes wrong if you use `{ }` in an arrow function but forget `return`?
 *   Q4. When would you reach for map() instead of forEach()?
 * ------------------------------------------------------------------------ */

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


const students = [
    { name: 'Alex', score: 85 },
    { name: 'Sam', score: 42 },
    { name: 'Jordan', score: 75 },
    { name: 'Taylor', score: 90 },
    { name: 'Casey', score: 35 }
]

const studentData = students.map((student) =>{
  console.log(student.name, student.score);
  const isPassed = student.score >= 50 ? `${student.name} => ${student.score} passed`  : `${student.name} => ${student.score} failed`


  
  console.log(isPassed);
  return isPassed;
})

console.log(studentData)
////
const passedStudents = students.filter( student => student.score >= 50).length;
  console.log('Students who passed:', passedStudents);
////
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
const averageScore = totalScore / students.length;
console.log('Class average:', averageScore); 
console.log('Total number of students:', students.length);
 











