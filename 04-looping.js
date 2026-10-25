/* ============================================================================
 * LESSON 04 — Looping: the for loop, then forEach
 * Run: node 04-looping.js
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. The classic for loop
 * ---------------------------------------------------------------------------
 * Three parts, separated by semicolons:
 *   1) let i = 0        — start at index 0
 *   2) i < array.length — keep going while this is true
 *   3) i++               — add 1 to i after each pass
 * ------------------------------------------------------------------------ */

function lesson_forLoop() {


  const animals = ['cat', 'dog', 'goat'];

  for (let i = 0; i < animals.length; i++) {
    console.log(i, '->', animals[i]);
  }
}


/* ---------------------------------------------------------------------------
 * 2. Off-by-one mistakes — the classic for-loop bug
 * ---------------------------------------------------------------------------
 * Get the condition wrong and you either miss the last item or crash into
 * `undefined`.
 * ------------------------------------------------------------------------ */

function lesson_offByOne() {
  console.log('\n--- 2. Off-by-one mistakes ---');

  const animals = ['cat', 'dog', 'goat'];

  console.log('WRONG (misses the last item):');
  for (let i = 0; i < animals.length - 1; i++) {
    console.log(' ', animals[i]);
  }

  console.log('WRONG (reads past the end):');
  for (let i = 0; i <= animals.length; i++) {
    console.log(' ', animals[i]); // last line logs `undefined`
  }

  console.log('RIGHT:');
  for (let i = 0; i < animals.length; i++) {
    console.log(' ', animals[i]);
  }
}


/* ---------------------------------------------------------------------------
 * 3. forEach — the array's own built-in loop
 * ---------------------------------------------------------------------------
 * forEach calls your function once per item, and hands you three things:
 * the item, its index, and the whole array (the last one is rarely used).
 * ------------------------------------------------------------------------ */

function lesson_forEach() {
  console.log('\n--- 3. forEach ---');

  const animals = ['cat', 'dog', 'goat'];

  animals.forEach(function (animal, index) {
    console.log(index, '->', animal);
  });
  // animals.forEach((animal, index) => {
  //   console.log(index, '->', animal);
  // });

  // Shorter, with an arrow function — this is what you'll see in real code:
  animals.forEach((animal, index) => console.log(index, '->', animal));

  // If you don't need the index, just leave it out:
  animals.forEach((animal) => console.log(animal));
}


/* ---------------------------------------------------------------------------
 * 4. Why bother with forEach if the for loop already works?
 * ---------------------------------------------------------------------------
 *  - No index bookkeeping, so no off-by-one bugs.
 *  - Reads as "for every item, do this" — the intent is in the method name.
 *  - It's the SAME shape as map, filter, reduce, find... (all next lessons).
 *    Master this shape once and the rest come fast.
 * ------------------------------------------------------------------------ */


/* ---------------------------------------------------------------------------
 * 5. What forEach can't do
 * ---------------------------------------------------------------------------
 * You cannot `break` out of a forEach early, and `return` inside it only
 * skips to the next item — it does not return a value out of forEach itself.
 * For early exits, a plain for loop (or `.some()`, lesson 12) is the right tool.
 * ------------------------------------------------------------------------ */

function lesson_cannotBreak() {
  console.log('\n--- 5. forEach cannot break early ---');

  const numbers = [1, 2, 30, 3, 5, 6, 7, 8, 9, 10];

  console.log('for loop CAN stop early:');
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) break;
    console.log(' ', numbers[i]);
  }

  console.log('forEach runs every item no matter what:');
  numbers.forEach((n) => {
    if (n === 3) return; // only skips THIS item, keeps going
    console.log(' ', n);
  });
}


/* ---------------------------------------------------------------------------
 * 6. forEach on numbers — using the value to do math
 * ---------------------------------------------------------------------------
 * The callback isn't just for printing — you can use `n` in real
 * calculations. Nothing is returned or collected; forEach just runs code.
 * ------------------------------------------------------------------------ */

function lesson_forEachNumbers() {
  console.log('\n--- 6. forEach on numbers ---');

  const numbers = [10, 20, 30, 40, 60];

 numbers.forEach((n) => {
    console.log(`${n} doubled is ${n * 2}`);
    console.log(`${n} gshjsddshjdshg ${n / 2}`);
  });
}


/* ---------------------------------------------------------------------------
 * 7. forEach on an array of OBJECTS — the shape you'll use most
 * ---------------------------------------------------------------------------
 * Real data is rarely a flat list of strings/numbers — it's usually an
 * array of objects, like products, users, or todo items. This is exactly
 * the shape we'll use in the mini-shop project.
 * ------------------------------------------------------------------------ */

function lesson_forEachObjects() {
  console.log('\n--- 7. forEach on objects ---');

  const students = [
    { name: 'Ada', score: 92 },
    { name: 'Grace', score: 85 },
    { name: 'Alan', score: 78 },
  ];

  // console.log(students[1].name)
  students.forEach((student) => {
    console.log(`${student.name} scored ${student.score}`);
  });

  // You can destructure right in the parameter list:
  students.forEach(({ name, score }) => {
    console.log(`${name} -> ${score}`);
  });

  // Destructure an array by position:
  const colors = ['red', 'green', 'blue'];
  const cars = ['Toyota', 'Honda', 'Ford'];

  const [firstColor, secondColor, emmanuel] = colors;

  console.log(firstColor, secondColor, emmanuel); // red green blue

  // Destructure an object by property name and rename a property:
  const student = { name: 'Marie', score: 95 };
  const { name: studentName, score: studentScore } = student;
  console.log(`${studentName} scored ${studentScore}`);

  console.log(`${student.name} scored ${student.score}`); // same as above, without destructuring
  
  
}


/* ---------------------------------------------------------------------------
 * 8. forEach with an if statement inside — filtering by hand
 * ---------------------------------------------------------------------------
 * forEach doesn't skip anything on its own — every item runs through the
 * callback. If you only want to DO something for some items, you check
 * with an `if` inside the callback (this is NOT the same as `.filter()`,
 * which we cover in lesson 06 — filter builds a new array, this just
 * decides what to log).
 * ------------------------------------------------------------------------ */

function lesson_forEachWithIf() {
  console.log('\n--- 8. forEach + if ---');

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  numbers.forEach((n) => {
    if (n % 2 === 0) {
      console.log(`${n} is even`);
    } else{
      console.log(`${n} is odd`);
    }
  });
}


/* ---------------------------------------------------------------------------
 * 9. forEach using the index — numbering things, finding neighbors
 * ---------------------------------------------------------------------------
 * The second parameter (index) is useful for anything position-based:
 * numbering output, comparing to the previous/next item, or knowing if
 * you're on the first or last item.
 * ------------------------------------------------------------------------ */

function lesson_forEachIndexUses() {
  console.log('\n--- 9. forEach + index ---');

  const animals = ['cat', 'dog', 'goat', 'fox'];

  // Number each item starting at 1, not 0:
  animals.forEach((animal, index) => {
    console.log(`${index + 1}. ${animal}`);
  });

  // Know when you're on the last item:
  animals.forEach((animal, index) => {
    const isLast = index === animals.length - 1;
    console.log(animal + (isLast ? ' (last one!)' : ''));
  });
}


/* ---------------------------------------------------------------------------
 * 10. forEach building up a single value OUTSIDE the loop
 * ---------------------------------------------------------------------------
 * forEach itself always returns `undefined` — but the callback can still
 * update a variable declared before the loop starts. This is the exact
 * pattern the mini-shop project uses to build one big HTML string.
 * ------------------------------------------------------------------------ */

function lesson_forEachBuildString() {
  console.log('\n--- 10. forEach building a string ---');

  const fruits = ['apple', 'banana', 'cherry'];

  let sentence = '';
  fruits.forEach((fruit, index) => {
    sentence += fruit + ', ';
    // if (index < fruits.length - 1) sentence += ', ';
  });
  
  console.log('Shopping list:', sentence);

  // Same idea, but building total price from an array of objects:
  const cart = [
    { item: 'Bread', price: 3 },
    { item: 'Milk', price: 2 },
    { item: 'Eggs', price: 4 },
  ];

  let total = 0;
  cart.forEach((product) => {
    total += product.price;
    // total = total + product.price;
    console.log(`Adding ${product.item}: $${product.price} (running total: $${total})`);
  });

  console.log('Final total:', total);
}


/* ---------------------------------------------------------------------------
 * 11. forEach does NOT create a new array — a common beginner trap
 * ---------------------------------------------------------------------------
 * `return` inside forEach's callback does nothing useful — it just ends
 * that one pass early, same as in lesson 5. forEach's own return value is
 * always `undefined`. If you want a NEW array back, that's map() (lesson 05).
 * ------------------------------------------------------------------------ */

function lesson_forEachReturnsUndefined() {
  console.log('\n--- 11. forEach returns undefined ---');

  const numbers = [1, 2, 3];

  const result = numbers.forEach((n) => {
    return n * 2; // this value goes nowhere!
  });

  console.log('What forEach gives back:', result); // undefined

  console.log('Compare to map(), which DOES collect return values:');
  const doubled = numbers.map((n) => n * 2);
  console.log('map() result:', doubled);
}


/* ---------------------------------------------------------------------------
 * 12. Nested forEach — looping inside a loop
 * ---------------------------------------------------------------------------
 * Useful when each item itself contains a list, e.g. categories that each
 * have their own products.
 * ------------------------------------------------------------------------ */

function lesson_nestedForEach() {
  console.log('\n--- 12. Nested forEach ---');

  const categories = [
    { name: 'Fruit', items: ['apple', 'banana'] },
    { name: 'Veggies', items: ['carrot', 'pea'] },
  ];

  categories.forEach((category) => {
    console.log(category.name + ':');
    category.items.forEach((item) => {
      console.log('  -', item);
    });
  });
}


/* ---------------------------------------------------------------------------
 * RUNNER
 * ------------------------------------------------------------------------ */
// lesson_forLoop();
// lesson_offByOne();
// lesson_forEach();
// lesson_cannotBreak();
// lesson_forEachNumbers();
// lesson_forEachObjects();
// lesson_forEachWithIf();
// lesson_forEachIndexUses();
lesson_forEachBuildString();
// lesson_forEachReturnsUndefined();
// lesson_nestedForEach();

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. What are the three parts of a for loop's header, in order?
 *   Q2. What three arguments does forEach's function receive?
 *   Q3. Can you `break` out of a forEach loop early?
 *   Q4. Why is learning forEach good preparation for map/filter/reduce?
 *   Q5. What does forEach itself return, no matter what your callback
 *       returns?
 *   Q6. In lesson 10, why is `sentence` declared BEFORE the forEach loop
 *       instead of inside it?
 *   Q7. In lesson 8, is checking `if (n % 2 === 0)` inside forEach the same
 *       as using `.filter()`? What's different about what each one gives
 *       you back?
 *   Q8. Write a forEach that loops over an array of your own choosing and
 *       logs a different message for the first, last, and middle items.
 * ------------------------------------------------------------------------ */
