/* ============================================================================
 * LESSON 02 — Indexing, updating, and mutability
 * Run: node 02-reading-and-updating.js
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. THE ZERO-INDEX RULE  ← teach this slowly, it is the #1 beginner trip-up
 * ---------------------------------------------------------------------------
 * Positions are called INDEXES. Counting starts at 0, not 1.
 *
 *   ['apple', 'banana', 'cherry']
 *      0         1          2
 *
 * Think of the index as "how many steps from the start," not "which place
 * in line." The first item is 0 steps away from the start.
 * ------------------------------------------------------------------------ */

function lesson_zeroIndex() {
  console.log('\n--- 1. Zero-based indexing ---');

  const fruits = ['apple', 'banana', 'cherry'];

  console.log(fruits[0]); // apple  — first
  console.log(fruits[1]); // banana — second
  console.log(fruits[2]); // cherry — third
}


/* ---------------------------------------------------------------------------
 * 2. The last item, without hardcoding a number
 * ---------------------------------------------------------------------------
 * The last valid index is always `.length - 1`, because indexes start at 0.
 * ------------------------------------------------------------------------ */

function lesson_lastItem() {
  console.log('\n--- 2. The last item ---');

  const fruits = ['apple', 'banana', 'cherry'];

  console.log(fruits[fruits.length - 1]); // "cherry" — works for any length
  // console.log(fruits[fruits.length]);  // undefined — one past the end, a classic bug
}


/* ---------------------------------------------------------------------------
 * 3. Going out of bounds
 * ---------------------------------------------------------------------------
 * JavaScript does NOT throw an error for a missing index. It just gives you
 * `undefined`. This is different from many other languages and it means bugs
 * can slip by silently.
 * ------------------------------------------------------------------------ */

function lesson_outOfBounds() {
  console.log('\n--- 3. Out of bounds ---');

  const fruits = ['apple', 'banana', 'cherry'];

  console.log(fruits[10]);  // undefined, no crash
  console.log(fruits[-1]);  // ALSO undefined — negative indexes are NOT "from the end"
  //                            in plain arrays (unlike Python). Use .at(-1) for that.
  console.log(fruits.at(-1)); // "cherry" — the modern way to get "last item"
}


/* ---------------------------------------------------------------------------
 * 4. Updating an item
 * ---------------------------------------------------------------------------
 * Same square-bracket syntax, but on the LEFT side of an `=`.
 * ------------------------------------------------------------------------ */

function lesson_updating() {
  console.log('\n--- 4. Updating an item ---');

  const fruits = ['apple', 'banana', 'cherry'];

  fruits[1] = 'blueberry'; // replace "banana"

  console.log(fruits); // ['apple', 'blueberry', 'cherry']
}


/* ---------------------------------------------------------------------------
 * 5. THE MUTABILITY GOTCHA
 * ---------------------------------------------------------------------------
 * Arrays declared with `const` can still be CHANGED. `const` only locks the
 * variable name from being reassigned to a different array — it says nothing
 * about what's inside.
 * ------------------------------------------------------------------------ */

function lesson_constDoesNotFreeze() {
  console.log('\n--- 5. const does not freeze an array ---');

  const colors = ['red', 'green'];

  colors.push('blue');     // fine — we're editing the SAME array
  console.log(colors);     // ['red', 'green', 'blue']

  try {
    // colors = ['totally', 'new', 'array']; // <-- uncomment: this WOULD throw
    // "Assignment to constant variable." That's what const actually protects.
  } catch (err) {
    console.log('error:', err.message);
  }
}


/* ---------------------------------------------------------------------------
 * RUNNER
 * ------------------------------------------------------------------------ */
lesson_zeroIndex();
lesson_lastItem();
lesson_outOfBounds();
lesson_updating();
lesson_constDoesNotFreeze();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. In `['a','b','c']`, what index holds `'c'`?
 *   Q2. What does JS return when you read an index that doesn't exist?
 *   Q3. Does `fruits[-1]` get you the last item? What does?
 *   Q4. Can you `.push()` into a `const` array? Why does that not contradict `const`?
 * ------------------------------------------------------------------------ */
