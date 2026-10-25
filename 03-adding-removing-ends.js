/* ============================================================================
 * LESSON 03 — push, pop, unshift, shift
 * Run: node 03-adding-removing-ends.js
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. These four only work at the ENDS
 * ---------------------------------------------------------------------------
 *   push(item)    add to the END
 *   pop()         remove from the END
 *   unshift(item) add to the START
 *   shift()       remove from the START
 *
 * All four MUTATE the original array — no copy is made.
 *
 * Memory trick: push/pop = a stack of plates (add/remove from the top).
 *               shift/unshift = the front of a line (everyone shifts down).
 * ------------------------------------------------------------------------ */

function lesson_push() {
  console.log('\n--- push() ---');

  const queue = ['Bola', 'Chike'];
  const newLength = queue.push('Dara'); // add to the end

  console.log('array:', queue);
  console.log('push() returns the new length:', newLength);
}

function lesson_pop() {
  console.log('\n--- pop() ---');

  const queue = ['Bola', 'Chike', 'Dara'];
  const removed = queue.pop(); // remove the last item

  console.log('removed:', removed);
  console.log('array now:', queue);
}

function lesson_unshift() {
  console.log('\n--- unshift() ---');

  const queue = ['Chike', 'Dara'];
  const newLength = queue.unshift('Amaka'); // add to the start

  console.log('array:', queue);
  console.log('unshift() also returns the new length:', newLength);
}

function lesson_shift() {
  console.log('\n--- shift() ---');

  const queue = ['Amaka', 'Chike', 'Dara'];
  const removed = queue.shift(); // remove the first item, everyone else moves down

  console.log('removed:', removed);
  console.log('array now:', queue);
}


/* ---------------------------------------------------------------------------
 * 2. push() can take multiple items at once
 * ------------------------------------------------------------------------ */

function lesson_multipleAtOnce() {
  console.log('\n--- multiple items in one call ---');

  const cart = ['bread'];
  cart.push('milk', 'eggs', 'butter');

  console.log(cart);
}


/* ---------------------------------------------------------------------------
 * 3. Common bug: forgetting these change the ORIGINAL array
 * ---------------------------------------------------------------------------
 * Unlike map/filter (lessons 05–06), these four don't hand you a new array —
 * they change the one you already have. If you needed the old version too,
 * you had to copy it FIRST.
 * ------------------------------------------------------------------------ */

function lesson_theyMutate() {
  console.log('\n--- these mutate, they don\'t return a new array ---');

  const original = ['a', 'b'];
  const result = original.push('c'); // result is 3 (the new length!) — NOT the array

  console.log('original, now changed:', original); // ['a','b','c']
  console.log('what push() gave back:', result);    // 3 — a common surprise
}


/* ---------------------------------------------------------------------------
 * RUNNER
 * ------------------------------------------------------------------------ */
lesson_push();
lesson_pop();
lesson_unshift();
lesson_shift();
lesson_multipleAtOnce();
lesson_theyMutate();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. Which two methods work at the END of an array? Which two work at the START?
 *   Q2. What does push() return — the new array, or something else?
 *   Q3. What does pop() return?
 *   Q4. Do any of these four methods leave the original array unchanged?
 * ------------------------------------------------------------------------ */
