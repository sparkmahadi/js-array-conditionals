/*
You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);

var positionIndex = fruits.indexOf('Banana');
console.log(positionIndex);

fruits[1]='Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);


