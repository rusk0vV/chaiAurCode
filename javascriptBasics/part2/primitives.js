// Number

let balance = 120;

let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);

console.log(typeof balance);
console.log(typeof anotherBalance);

console.log(anotherBalance.valueOf());

console.log(balance === anotherBalance);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// Null and Undefined

let firstname = null;
let lastname = undefined
console.log(firstname);
console.log(lastname);

// Strings

let myString = "Hello";
let myName = "Hitesh";

let oldGreet = myString + " " + myName;
console.log(oldGreet);

let newGreet = `${myString} ${myName}`;
console.log(newGreet);

// Symbol

let sm1 = Symbol("Ali");






