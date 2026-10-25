/* ============================================================================
 * LESSON 01 — What an array actually is
 * Run: node 01-basics.js   (or paste into a browser console)
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. The one-sentence definition
 * ---------------------------------------------------------------------------
 * An array is a single variable that holds a LIST of values, in order.
 *
 * Think of an egg carton: one container, several slots, each slot holds one
 * thing, and every slot has a position. That's an array.
 * ------------------------------------------------------------------------ */


/* ---------------------------------------------------------------------------
 * 2. Life without arrays (don't do this)
 * ---------------------------------------------------------------------------
 * Storing three related values as three separate variables gets messy fast,
 * and it's impossible to scale to 100 items.
 * ------------------------------------------------------------------------ */

function lesson_withoutAnArray() {
  console.log('\n--- 2. Without an array ---');

  const student1 = 'Amaka';
  const student2 = 'Tunde';
  const student3 = 'Ifeoma';

  console.log(student1, student2, student3);
  // Imagine writing this for 100 students. There's no way to loop over
  // student1, student2, student3... they're unrelated variables to JS.
}


/* ---------------------------------------------------------------------------
 * 3. The fix: one array
 * ---------------------------------------------------------------------------
 * Square brackets `[ ]`, values separated by commas.
 * ------------------------------------------------------------------------ */

function lesson_withAnArray() {
  console.log('\n--- 3. With an array ---');

  const students = ['Amaka', 'Tunde', 'Ifeoma'];

  console.log(students);
  console.log('type:', typeof students);       // 'object' — arrays ARE objects
  console.log('is it an array?', Array.isArray(students)); // the real check
}


/* ---------------------------------------------------------------------------
 * 4. Arrays can hold anything, but usually hold one kind of thing
 * ------------------------------------------------------------------------ */

function lesson_whatCanGoInside() {
  console.log('\n--- 4. What can go inside ---');

  const numbers = [10, 25, 40];
  const words = ['red', 'green', 'blue'];
  const flags = [true, false, true];
  const mixed = [1, 'two', true, [4, 5]]; // legal, but rarely a good idea

  console.log(numbers);
  console.log(words);
  console.log(flags);
  console.log(mixed);
}


/* ---------------------------------------------------------------------------
 * 5. .length — how many items are in there
 * ---------------------------------------------------------------------------
 * `.length` is a PROPERTY, not a method — no parentheses.
 * ------------------------------------------------------------------------ */

function lesson_length() {
  console.log('\n--- 5. .length ---');

  const students = ['Amaka', 'Tunde', 'Ifeoma'];

  console.log('there are', students.length, 'students');

  const empty = [];
  console.log('an empty array has length', empty.length);
}


/* ---------------------------------------------------------------------------
 * 6. Reading one item — a first taste of indexing
 * ---------------------------------------------------------------------------
 * Full detail is lesson 02. For now, just know: square brackets with a
 * number get you one item, and counting starts at 0.
 * ------------------------------------------------------------------------ */

function lesson_firstIndexingTaste() {
  console.log('\n--- 6. A first taste of indexing ---');

  const fruits = ['apple', 'banana', 'cherry'];

  console.log('fruits[0] ->', fruits[0]); // "apple", the FIRST item
  console.log('fruits[1] ->', fruits[1]); // "banana", the second item
}


/* ---------------------------------------------------------------------------
 * RUNNER
 * ------------------------------------------------------------------------ */
lesson_withoutAnArray();
lesson_withAnArray();
lesson_whatCanGoInside();
lesson_length();
lesson_firstIndexingTaste();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. What two characters do you use to write an array?
 *   Q2. What does `typeof` say an array is? What's the more precise check?
 *   Q3. Does `.length` need parentheses? Why or why not?
 *   Q4. What position number does the FIRST item in an array have?
 * ------------------------------------------------------------------------ */
