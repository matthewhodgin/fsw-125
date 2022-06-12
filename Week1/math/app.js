// const sumFx = require('./math');

// console.log(sumFx(10, 2));

// const importObj = require('./math');

// console.log(importObj); // entire module.exports object
// console.log(importObj.greet); // functional express value of the greet property
// console.log(importObj.greet());  // hello world

const mathObj = require('./math');

console.log(mathObj);  
console.log(mathObj.sum(1000,1));  
console.log(mathObj.subtract(1000,1));   

const greetCFx = require('./math');
const greetr = new greetCFx();

console.log(GreetCFx)
console.log(greetr)
console.log(greeetr.greet());