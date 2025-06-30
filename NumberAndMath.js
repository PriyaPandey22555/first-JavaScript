// const score = 400;
// console.log(score);
const balance = new Number(100) // define the type of datatype
console.log(balance);
console.log(balance.toString().length); // Print the length of string
console.log(balance.toFixed(1));  // fixed the  lenght after decimal like 10.3;
 const otherNumber =23.564
console.log(otherNumber.toPrecision(14));  // fixed the length of digit 
const hundred = 1000000;
console.log(hundred.toLocaleString()); //saperated by comma given integer
console.log(hundred.toLocaleString('en-IN')); // saperated by comma given interger by indian rule
// ++++++++++++++++++++++ Math++++++++++++++++++++
 console.log(Math);
 console.log(Math.abs(-4)); // convert only negative into positive
console.log(Math.round(3.5)); // give the near number of 3.5 , like it give 4
console.log(Math.ceil(4.5)); // it give near highest number ,like it gives 5
console.log(Math.floor(4.5));// it give near lowest number ,like it give 4
console.log(Math.min(4,5,6,7,2)); // give minmum number ,like 2
console.log(Math.max(4,5,6,4,2,5)); // give max number like 6
console.log(Math.random()); // give number in between 0 or 1
console.log((Math.random()*10) ); // nagalate the given number like 0.33444 then we multiple with 10 or shift left
console.log((Math.random()*10)+1 );  //after shift it give number 
console.log(Math.floor(Math.random()*10)+1); 
const min =10;
const max = 20;
console.log(Math.floor(Math.random() *(max -min +1)));