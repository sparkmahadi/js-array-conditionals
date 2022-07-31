/*
You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/

var fruits = ['Apple', 'Banana', 'Orange'];

var positionIndex = fruits.indexOf('Banana');
console.log(positionIndex);

fruits.pop();
console.log(fruits);

// fruits.splice(1, 0, 'Mango');
// console.log(fruits);

