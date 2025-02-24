// Fundamentals

/* To open console :
 
a. command + option + J
b. left click + inspect
c. Broswer header + view + developper + JavaScript Console

*/

// Alerts, Let / If

// 1

let js = "amazing";

if (js === "amazing")
  alert("Brendan Wake Up. This Is The Time Created For You To Shine.");

js = "boring";
if (js === "amazing")
  alert("Brendan Wake Up. This Is The Time Created For You To Shine.");

if (js === "amazing")
  alert("Brendan Wake Up. This Is The Time Created For You To Shine.");

// 2

let question = "Why have you always wondered what is possible?";

if (question === "Why have you always wondered what is possible?")
  alert("The answer is within you.");

// 3

let truth = "You are the child of the Heavenly King";

if (truth === "You are the child of the Heavenly King") alert("Go All In");

// 4

let js = "amazing";

if (js === "amazing") alert("The best is yet to come!");

// 5

let hello = "Hello World, Here I am";

if (hello === "Hello World, Here I am") alert("You are here on the Earth!");

// If placed within an index.html file it's called an 'in-line script'

// Maths (In Console)

40 + 8 + 23 - 10;

10 + 12 + 54 + 2 - 4 / 6;

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

20 + 40;
console.log(40 + 20);

// Data Types

// 2 Types of Values : Objects and Primitives

// Object

let me = {
  name: "Bren",
};

// Primitive

let firstName = "Brendan";
let age = 31;

// 7 Types of Primitive

// Number : Floating point numbers = Used for decimals and integers

let ageOf = 23; // Actually 23.0

// String : Sequence of characters = Used for text

let firstNameMan = "Jippy";

// Boolean : Logical type that can only be true or false = Used for making decisions

let fullAge = true;

// Undefined : Value taken by a variable that is not yet defined ('empty value')

let children;

// Null : Also means 'empty value'

// Symbol (ES2015) : Value that is unique and cannot be changed

// BigInt (Es2020) : Larger integers than the Number type can hold

/* 

Notes :

JavaScript has dynamic typing : We do NOT have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

The VALUE has a TYPE
The VARIABLE does not have a TYPE
VARIABLES store VALUES that have a TYPE 

*/

// Booleans

true; // Boolean value
console.log(true);

let iAmCoding = true;
console.log(iAmCoding);

// TypeOf

console.log(typeof true);
console.log(typeof iAmCoding);
console.log(typeof 24);
console.log(typeof "Fish"); // Strings always have ' ' or " "

iAmCoding = "This is the reality of your existence currently!";
console.log(iAmCoding);
console.log(typeof iAmCoding);

// Undefined : An empty value

let yeet;
console.log(yeet);
console.log(typeof yeet);

yeet = "Gotti!";
console.log(typeof yeet);

console.log(typeof null);
// Appears object. Not an object, a bug, should return null

// Operators

// Operator Precedence : PEDMAS : Parantheses, Exponents, Division, Multiplication, Addition, Subtraction

// Mathematical Operators

const now = 2050;
const ageBrendan = now - 1994;
const ageSarai = now - 1941;

console.log(now, ageBrendan, ageSarai);
console.log(ageBrendan * 2, ageBrendan / 2, 2 ** 3);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Brent";
const lastName = "Shivers";

console.log(firstName + " " + lastName);

// Assignment Operators

let x = 10 + 5;
// the = and the + are both operators

x += 10; // x = x + 10
console.log(x);

x *= 4; // x = x * 4
console.log(x);

x++; // x = x + 1
x--; // x = x - 1

console.log(x);

// Comparison Operators

console.log(ageBrendan > ageSarai); // Boolean response : >, <, >=, <=
console.log(ageSarai >= 100);

const isFullAge = ageSarai >= 100;

console.log(now - 1994 > now - 1941);
