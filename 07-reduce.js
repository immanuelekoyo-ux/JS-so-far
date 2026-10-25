/* ============================================================================
 * LESSON 07 — reduce(): boil a list down to one value
 * Run: node 07-reduce.js
 * This is the trickiest lesson in the class. Go slow.
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. The shape
 * ---------------------------------------------------------------------------
 *   array.reduce((accumulator, item) => newAccumulator, startValue)
 *
 * reduce() walks through the array carrying a running value (the
 * "accumulator") from one item to the next, and returns just that final
 * value. Unlike map/filter, the OUTPUT of reduce is not an array — it's
 * whatever you built.
 * ------------------------------------------------------------------------ */

function lesson_reduceBasics() {
  console.log('\n--- 1. reduce basics: summing prices ---');

  const cart = [12, 25, 8, 40];

  const total = cart.reduce((sum, price) => sum + price, 0);
  //                          ^ running total  ^ each item  ^ start at 0

  console.log('total cost:', total);
}


/* ---------------------------------------------------------------------------
 * 2. Watch it happen, step by step
 * ---------------------------------------------------------------------------
 * Read this out loud in class: "start with 0, then for every price, add it
 * to what I have so far."
 * ------------------------------------------------------------------------ */

function lesson_stepByStep() {
  console.log('\n--- 2. Step by step ---');

  const cart = [12, 25, 8, 40];

  cart.reduce((sum, price) => {
    console.log('sum so far:', sum, '+ next item:', price, '=', sum + price);
    return sum + price; // this becomes "sum so far" on the NEXT call
  }, 0);
}


/* ---------------------------------------------------------------------------
 * 3. Always set the starting value explicitly (while learning)
 * ---------------------------------------------------------------------------
 * If you omit the starting value, reduce() uses the array's first item as
 * the start and begins from the SECOND item instead. This works, but it's a
 * common source of confusion and breaks on an empty array. Set it explicitly.
 * ------------------------------------------------------------------------ */

function lesson_startingValueMatters() {
  console.log('\n--- 3. Starting value matters ---');

  const numbers = [1, 2, 3];

  const withStart = numbers.reduce((sum, n) => sum + n, 0);    // starts at 0
  const withoutStart = numbers.reduce((sum, n) => sum + n);    // starts at numbers[0]

  console.log('with start value:', withStart);       // 6
  console.log('without start value:', withoutStart); // also 6, but by accident of order

  try {
    [].reduce((sum, n) => sum + n); // no start value + empty array = crash
  } catch (err) {
    console.log('empty array, no start value ->', err.message);
  }
}


/* ---------------------------------------------------------------------------
 * 4. reduce is not just for math — building other shapes
 * ------------------------------------------------------------------------ */

function lesson_reduceBuildsThings() {
  console.log('\n--- 4. reduce building an object (a tally) ---');

  const votes = ['dog', 'cat', 'dog', 'dog', 'cat', 'fish'];

  const tally = votes.reduce((counts, vote) => {
    counts[vote] = (counts[vote] || 0) + 1; // "have I seen this before?"
    return counts;
  }, {}); // <- starting value is an EMPTY OBJECT this time, not 0

  console.log(tally); // { dog: 3, cat: 2, fish: 1 }
}


/* ---------------------------------------------------------------------------
 * 5. When NOT to reach for reduce
 * ---------------------------------------------------------------------------
 * If map or filter alone already say what you mean, use them — they're
 * easier to read. Reach for reduce when the result genuinely isn't a
 * same-length array or a filtered array: a total, a tally, a single object,
 * a maximum.
 * ------------------------------------------------------------------------ */


/* ---------------------------------------------------------------------------
 * RUNNER
 * ------------------------------------------------------------------------ */
lesson_reduceBasics();
lesson_stepByStep();
lesson_startingValueMatters();
lesson_reduceBuildsThings();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. What are the two arguments passed to reduce()'s function?
 *   Q2. What is the second argument to reduce() itself (after the function)?
 *   Q3. What happens if you call reduce() on an empty array with no start value?
 *   Q4. Name one thing reduce() can build that isn't a number.
 * ------------------------------------------------------------------------ */
