/* ============================================================================
 * LESSON 08 — find, findIndex, includes, indexOf
 * Run: node 08-finding.js
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. Four different questions, four different methods
 * ---------------------------------------------------------------------------
 *   array.includes(value)        -> true/false, is it in there at all?
 *   array.indexOf(value)         -> position of a value, or -1
 *   array.find(item => test)     -> the first matching ITEM itself
 *   array.findIndex(item => test)-> position of the first match, or -1
 * ------------------------------------------------------------------------ */

function lesson_includesAndIndexOf() {
  console.log('\n--- 1. includes() and indexOf() — for simple values ---');

  const fruits = ['apple', 'banana', 'cherry'];

  console.log(fruits.includes('banana')); // true
  console.log(fruits.includes('mango'));  // false

  console.log(fruits.indexOf('banana'));  // 1
  console.log(fruits.indexOf('mango'));   // -1  <- "not found" is -1, not undefined
}


/* ---------------------------------------------------------------------------
 * 2. find() and findIndex() — for objects, or any custom condition
 * ---------------------------------------------------------------------------
 * includes()/indexOf() only check for an EXACT match. They can't ask
 * "find the user whose age is over 18" — for that you need a function.
 * ------------------------------------------------------------------------ */

function lesson_findAndFindIndex() {
  console.log('\n--- 2. find() and findIndex() — for objects ---');

  const users = [
    { name: 'Amaka', age: 17 },
    { name: 'Tunde', age: 22 },
    { name: 'Ifeoma', age: 30 },
  ];

  const firstAdult = users.find((u) => u.age >= 18);
  console.log('first adult:', firstAdult);

  const indexOfFirstAdult = users.findIndex((u) => u.age >= 18);
  console.log('at index:', indexOfFirstAdult);

  const nobody = users.find((u) => u.age > 100);
  console.log('no match ->', nobody); // undefined, NOT an error
}


/* ---------------------------------------------------------------------------
 * 3. Why includes() alone doesn't work on an array of objects
 * ------------------------------------------------------------------------ */

function lesson_whyIncludesFailsOnObjects() {
  console.log('\n--- 3. includes() on objects doesn\'t do what you expect ---');

  const users = [{ name: 'Tunde' }, { name: 'Amaka' }];

  // WRONG — includes() compares by reference, and {name:'Tunde'} here is a
  // DIFFERENT object in memory from the one inside the array, even though
  // it looks identical:
  console.log(users.includes({ name: 'Tunde' })); // false — surprising!

  // RIGHT — check a property with find() or some() (lesson 12) instead:
  console.log(!!users.find((u) => u.name === 'Tunde')); // true
}


/* ---------------------------------------------------------------------------
 * 4. Rule of thumb
 * ---------------------------------------------------------------------------
 *   Simple values (numbers, strings)  -> includes() / indexOf()
 *   Objects, or any custom condition  -> find() / findIndex()
 * ------------------------------------------------------------------------ */


/* ---------------------------------------------------------------------------
 * RUNNER
 * ------------------------------------------------------------------------ */
lesson_includesAndIndexOf();
lesson_findAndFindIndex();
lesson_whyIncludesFailsOnObjects();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. What does indexOf() return when nothing matches?
 *   Q2. What does find() return when nothing matches?
 *   Q3. Why can't includes() find a matching object by its properties?
 *   Q4. You need "the first product under $20" from a list of objects. Which method?
 * ------------------------------------------------------------------------ */
