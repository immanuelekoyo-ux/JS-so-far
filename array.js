//Array are used to store multiple data in a variable
//Array litrals
let cars = ["Toyota", "Honda", "Mazda", "Benz", "Range ROver" ];
console.log(cars);

//Array constructor
let fruits = new Array ("Mango", "Orange", "Pawpaw", "Grapes");
console.log(fruits);

//Array from other objects
let str = "Hello";
let strArr = Array. from(str);
console.log(strArr);

//Differences between Array Litrals and constructors
let num = [5];
console.log(num);

let num1 = new Array (5);
console.log(num1);

//Negative INdexing
console.log(cars[0]);
console.log(cars[4]);
console.log(cars[cars.length - 1]);

//nested array array inside an array
let nums = [[1,2], [3,4], [5,6]];
console.log(nums[1][1]);

//Array method
let fruit = ["apple", "banana", "date", "pineapple"];
console.log(fruit);

fruit.push["orange", "grape"];//adds new elements to the end of an array
console.log(fruit);

fruit[4] = "Mango";
console.log(fruit);

fruit[fruit.length] - 1
console.log(fruit);

fruit[7] = "berries"
console.log(fruit);

fruit.pop(); //to remove the last element from an array and return it
console.log(fruit);

fruit.shift();// to reomve the first element from an array and return it
console.log(fruit);

fruit.unshift("kiwi")//inserts new elements at the start of an array
console.log(fruit);


//CONCAT to combine two or more arrays together
let boys = ["uche", "victor", "samuel"];
let girls = ["sarah", "ada"];
let students = boys.concat(girls);
console.log(students);

//SLICE to slice part of an array to create a new array
let slicedFruit = fruit.slice(1, 3);
console.log(slicedFruit);

//length
//join
//push
//pop
//shift
//unshift
//slice
//splice

//length

const fruitz = ['apple', 'banana', 'orange', 'grape', 'guava', 'kiwi', 'papaya', 'pear', 'pineable'];

let length = fruits.length; //length property returns the number of elements in an array
console.log(length);

//join
const shopping = ['belt', 'shoe', 'bag'];
let joinitem = shopping.join(' and ');
console.log(joinitem);

//push
let carz = ['toyota', 'benz', 'lexus'];

let pushcar = carz.push('ford', 'bmw'); //ADDS new elements to the END of an array
console.log(carz);
console.log(carz.length);

//pop
let popCar = carz.pop(); //to remove the lAST element from an array and return it
console.log(carz);

//shift
let names = ['ifeoluwa', 'immanuel', 'mazeed'];//to remove the FIRST element from an array and return it
let shiftname = names.shift();
console.log(names);

//unshift
let unshiftname = names.unshift('victor', 'samuel');//inserts new elements at the START of an array
console.log(names);

//slice
let slicedFruitz = fruitz.slice(1, 3); //slice to slice part of an array to create a new array
console.log(slicedFruitz);



//splice
let laptop = ['hp', 'dell', 'legacy']; //splice to remove or replace elements in an array
let spliceitem = laptop.splice(2, 0, 'acer', 'samsung', 'lenovo');// the first parameter specifies the index at which to start changing the array, the second parameter specifies the number of elements to remove, and the third parameter specifies the new elements to add.
console.log(laptop);

//slice
let slicelaptop = laptop.slice(1);
console.log(slicelaptop);
