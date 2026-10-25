/* ============================================================================
 * LESSON 06 — filter(): keep only what matches
 * Run: node 06-filter.js
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. The shape
 * ---------------------------------------------------------------------------
 *   array.filter(item => true or false)
 *
 * Your function returns true or false for each item ("a test", or
 * "predicate"). filter() keeps the items where it was true, drops the rest,
 * and returns a NEW array — possibly shorter, never longer, original untouched.
 * ------------------------------------------------------------------------ */

function lesson_filterBasics() {
  console.log('\n--- 1. filter basics ---');

  const ages = [12, 19, 7, 25, 16, 30];

  const adults = ages.filter((age) => age >= 18);

  console.log('everyone:', ages);
  console.log('adults only:', adults);
}


/* ---------------------------------------------------------------------------
 * 2. map vs. filter — the distinction students mix up
 * ---------------------------------------------------------------------------
 *   map()    changes each item, KEEPS them all      -> same length out
 *   filter() keeps items AS-IS, DROPS some           -> same or shorter
 *
 * Many real tasks chain both.
 * ------------------------------------------------------------------------ */

function lesson_mapVsFilter() {
  console.log('\n--- 2. map vs filter, chained ---');

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const evenDoubled = numbers
    .filter((n) => n % 2 === 0) // keep evens: [2, 4, 6, 8]
    .map((n) => n * 10);        // then transform: [20, 40, 60, 80]

  console.log(evenDoubled);
}


/* ---------------------------------------------------------------------------
 * 3. filter with objects
 * ------------------------------------------------------------------------ */

function lesson_filterObjects() {
  console.log('\n--- 3. filter with objects ---');

  const products = [
    { name: 'Laptop', inStock: true, price: 1200 },
    { name: 'Mouse', inStock: false, price: 25 },
    { name: 'Keyboard', inStock: true, price: 80 },
  ];

  const availableAndAffordable = products.filter(
    (p) => p.inStock && p.price < 1000
  );

  console.log(availableAndAffordable);
}


/* ---------------------------------------------------------------------------
 * 4. Common bug: forgetting filter needs true/false, not a value
 * ------------------------------------------------------------------------ */

function lesson_needsBoolean() {
  console.log('\n--- 4. filter needs a true/false answer ---');

  const words = ['hi', 'hello', 'hey', 'greetings'];

  // WRONG-ish: works here by accident (word.length is "truthy" for any
  // non-empty string), but it's not actually testing anything meaningful:
  const accidental = words.filter((word) => word.length);
  console.log('accidental (keeps everything):', accidental);

  // RIGHT: an actual comparison that returns true/false
  const longWords = words.filter((word) => word.length > 3);
  console.log('long words only:', longWords);
}


/* ---------------------------------------------------------------------------
 * RUNNER
 * ------------------------------------------------------------------------ */
// lesson_filterBasics();
// lesson_mapVsFilter();
lesson_filterObjects();
// lesson_needsBoolean();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. Can filter() ever return an array LONGER than the original?
 *   Q2. What should the function you pass to filter() return?
 *   Q3. In `numbers.filter(...).map(...)`, which one runs first?
 *   Q4. Does filter() change the original array?
 * ------------------------------------------------------------------------ */


/* ============================================================================
 * CLASSWORK — filter()
 * ----------------------------------------------------------------------------
 * Write your answer under each task. Use filter() for every task.
 * Save each result in a new variable and console.log() it.
 * ==========================================================================*/

const scores = [45, 82, 67, 90, 38, 75, 100, 52];

const fruits = ['apple', 'kiwi', 'banana', 'fig', 'mango', 'pear', 'watermelon'];

const students = [
  { name: 'Ada',    age: 15, passed: true  },
  { name: 'Tunde',  age: 17, passed: false },
  { name: 'Chioma', age: 16, passed: true  },
  { name: 'Musa',   age: 18, passed: true  },
  { name: 'Kemi',   age: 14, passed: false },
];


/* ---------------------------------------------------------------------------
 * TASK 1: Passing scores
 *   From `scores`, get only the scores that are 50 or above.
 *
 *   HINT: Look back at the `ages` example in section 1.
 *         Which comparison operator means "50 or above"?
 * ------------------------------------------------------------------------ */

// your code here


/* ---------------------------------------------------------------------------
 * TASK 2: Failing scores
 *   From `scores`, get only the scores that are BELOW 50.
 *
 *   HINT: This is almost the same as Task 1. Just flip the test.
 * ------------------------------------------------------------------------ */

// your code here


/* ---------------------------------------------------------------------------
 * TASK 3: Short fruit names
 *   From `fruits`, get only the fruits whose name has 4 letters or fewer.
 *
 *   HINT: Every string has a `.length`. See section 4.
 * ------------------------------------------------------------------------ */

// your code here


/* ---------------------------------------------------------------------------
 * TASK 4: Students who passed
 *   From `students`, get only the students where `passed` is true.
 *
 *   HINT: `passed` is already true or false.
 *         Do you even need a comparison here?
 * ------------------------------------------------------------------------ */

// your code here


/* ---------------------------------------------------------------------------
 * TASK 5: Two conditions
 *   From `students`, get only the students who passed AND are 16 or older.
 *
 *   HINT: Look at section 3. How did we check TWO things at once?
 * ------------------------------------------------------------------------ */

// your code here


/* ---------------------------------------------------------------------------
 * BONUS: filter + map
 *   From `students`, get the NAMES of the students who did NOT pass.
 *   Your result should be an array of strings, not objects.
 *
 *   HINT: First filter, then map. See section 2.
 *         `!` means "not".
 * ------------------------------------------------------------------------ */

// your code here


/* ---------------------------------------------------------------------------
 * FINAL CHECK
 *   After all your tasks, console.log(scores), console.log(fruits) and
 *   console.log(students). Did any of the original arrays change? Why?
 * ------------------------------------------------------------------------ */

