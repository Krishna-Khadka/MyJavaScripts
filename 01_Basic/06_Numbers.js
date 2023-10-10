
const num = 500
// console.log(num);

const number = new Number(1000)
// console.log(number);
// console.log(number.toString());
// console.log(number.toString().length);
// console.log(number.toFixed(2));

const newNum = new Number(500.25)
// console.log(newNum.toPrecision(4));
// console.log(newNum.toPrecision(3));


// ********************  Maths  **********************************

// console.log(Math);
// console.log(Math.abs(-10));
// console.log(Math.round(20.56));
// console.log(Math.min(10,15,8,23));
// console.log(Math.max(10,15,8,23));

// Mostly used in random

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.random()*10 + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 20
const max = 30
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(Math.random() * (max - min + 1) + min)