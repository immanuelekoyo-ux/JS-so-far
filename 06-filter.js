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
// lesson_filterObjects();
// lesson_needsBoolean();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. Can filter() ever return an array LONGER than the original?
 *   Q2. What should the function you pass to filter() return?
 *   Q3. In `numbers.filter(...).map(...)`, which one runs first?
 *   Q4. Does filter() change the original array?
 * ------------------------------------------------------------------------ */


//CLASSWORK
//passing score
//from the score array, filter out the score above 50
const score = [45, 12, 67, 90, 38, 75, 50, 100, 40, 73];

const scoreAbove = score.filter((s) => s >= 50);
console.log(scoreAbove);