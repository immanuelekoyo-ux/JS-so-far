/* ============================================================================
 * LESSON 09 — sort(): the one with a famous gotcha
 * Run: node 09-sorting.js
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. THE GOTCHA — sort() defaults to sorting as TEXT
 * ---------------------------------------------------------------------------
 * With no arguments, sort() converts every item to a string and compares
 * them alphabetically. For numbers, that quietly produces the wrong order.
 * ------------------------------------------------------------------------ */

function lesson_theGotcha() {
  console.log('\n--- 1. The gotcha ---');

  const numbers = [40, 5, 100, 25];

  console.log(numbers.sort());
  // [100, 25, 40, 5] — "100" comes before "25" as TEXT ("1" < "2").
  // This is almost never what you want.
}


/* ---------------------------------------------------------------------------
 * 2. The fix — a compare function
 * ---------------------------------------------------------------------------
 *   (a, b) => a - b   negative -> a comes first
 *                      positive -> b comes first
 *                      zero     -> leave them as-is
 * ------------------------------------------------------------------------ */

function lesson_compareFunction() {
  console.log('\n--- 2. Fixed with a compare function ---');

  const numbers = [40, 5, 100, 25];

  const ascending = [...numbers].sort((a, b) => a - b);
  const descending = [...numbers].sort((a, b) => b - a);

  console.log('ascending:', ascending);
  console.log('descending:', descending);
}


/* ---------------------------------------------------------------------------
 * 3. sort() MUTATES the original array — copy first if you need the original
 * ---------------------------------------------------------------------------
 * That's why lesson 2 above used `[...numbers]` (the spread operator,
 * covered fully in lesson 11) before sorting — it makes a copy.
 * ------------------------------------------------------------------------ */

function lesson_sortMutates() {
  console.log('\n--- 3. sort() mutates ---');

  const original = [3, 1, 2];
  const sorted = original.sort((a, b) => a - b);

  console.log('original is now ALSO sorted:', original); // [1, 2, 3] — changed!
  console.log('sort() returned the same array:', sorted === original); // true
}


/* ---------------------------------------------------------------------------
 * 4. Sorting strings
 * ---------------------------------------------------------------------------
 * Plain sort() actually works fine for simple alphabetical strings — the
 * gotcha is specifically about numbers.
 * ------------------------------------------------------------------------ */

function lesson_sortingStrings() {
  console.log('\n--- 4. Sorting strings ---');

  const names = ['Tunde', 'Amaka', 'Ifeoma'];

  console.log([...names].sort()); // alphabetical, works as expected
}


/* ---------------------------------------------------------------------------
 * 5. Sorting objects by a property
 * ------------------------------------------------------------------------ */

function lesson_sortingObjects() {
  console.log('\n--- 5. Sorting objects by a property ---');

  const products = [
    { name: 'Keyboard', price: 80 },
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
  ];

  const cheapestFirst = [...products].sort((a, b) => a.price - b.price);

  console.log(cheapestFirst.map((p) => `${p.name}: $${p.price}`));
}


/* ---------------------------------------------------------------------------
 * RUNNER
 * ------------------------------------------------------------------------ */
lesson_theGotcha();
lesson_compareFunction();
lesson_sortMutates();
lesson_sortingStrings();
lesson_sortingObjects();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. What does plain sort() with no arguments actually compare by?
 *   Q2. What does `(a, b) => a - b` produce: ascending or descending order?
 *   Q3. Does sort() change the original array?
 *   Q4. How do you sort a copy instead of the original?
 * ------------------------------------------------------------------------ */
