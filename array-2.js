//length
//join
//push
//pop
//shift
//unshift
//slice
//splice

//length

const fruits = ['apple', 'banana', 'orange', 'grape', 'guava', 'kiwi', 'papaya', 'pear','pineable'];

let length = fruits.length; //length property returns the number of elements in an array
console.log(length);

//join
const shopping = ['belt', 'shoe', 'bag'];
let joinitem = shopping.join(' and ');
console.log(joinitem);

//push
let cars = ['toyota', 'benz', 'lexus'];

let pushcar = cars.push('ford', 'bmw'); //ADDS new elements to the END of an array
console.log(cars);
console.log(cars.length);

//pop
let popCar = cars.pop(); //to remove the lAST element from an array and return it
    console.log(cars);

//shift
let names = ['ifeoluwa', 'immanuel', 'mazeed'];//to remove the FIRST element from an array and return it
let shiftname = names.shift();
console.log(names);

//unshift
let unshiftname = names.unshift('victor', 'samuel');//inserts new elements at the START of an array
console.log(names);

//slice
let sliced = fruits.slice(1, 3); //slice to slice part of an array to create a new array
console.log(sliced);



//splice
let laptop = ['hp', 'dell', 'legacy']; //splice to remove or replace elements in an array
let spliceitem = laptop.splice(2, 0, 'acer', 'samsung', 'lenovo');// the first parameter specifies the index at which to start changing the array, the second parameter specifies the number of elements to remove, and the third parameter specifies the new elements to add.
console.log(laptop);

//slice
let slicelaptop = laptop.slice(1);
console.log(slicelaptop);