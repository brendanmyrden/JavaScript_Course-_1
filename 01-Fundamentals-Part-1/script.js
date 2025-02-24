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
