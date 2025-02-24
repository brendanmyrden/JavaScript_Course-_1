// Values and Variables

const country = "Canada";
const continent = "North America";
let population = 42000000;

console.log(country);
console.log(continent);
console.log(population);

// Data Type

const isIsland = false;
let language; // undefined example

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "English";
console.log(language);

// Const : Unchangeable variable

// isIsland = true;
// Impossible because it is assigned to a constant variable

// Basic Operators

let h = population / 2;

const speech = `Approximately ${h} people would be living in either half of Canada.`;

console.log(speech);

h++;
console.log(h);

let finland = 6000000;

let trueOrFalse = population > finland;
let hasMore = `It's ${trueOrFalse} that my country of Canada has more people than Finland!`;
console.log(hasMore);

let avgPopulation = 33000000;

// Comparison Operators / If statement / Template Literals

if (population > avgPopulation)
  console.log(
    `My country of ${country} has a greater than average population.`
  );

if (population < avgPopulation)
  console.log(
    `My country of ${country} has less than the average country population.`
  );

population = `42,000,000`;

const description = `${country} is in ${continent}, its population of ${population} people speak mostly ${language}.`;
console.log(description);

// Challenge #1 : BMI index

// BMI = mass / (height * height);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;

if ((markHigherBMI = true)) {
  console.log(
    `Mark has a higher BMI, with a score of ${BMIMark}. John's BMI score is ${BMIJohn}`
  );
} else {
  console.log(
    `John has a higher BMI, with a score of ${BMIJohn}. John's BMI score is ${BMIMark}`
  );
}

console.log(markHigherBMI);

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / heightJohn2 ** 2;

console.log(BMIMark2, BMIJohn2);

let markHigherBMI2 = BMIMark2 > BMIJohn2;

if (markHigherBMI2) {
  console.log(
    `Mark has a higher BMI, with a score of ${BMIMark2}. John's BMI score is ${BMIJohn2}`
  );
} else {
  console.log(
    `John has a higher BMI, with a score of ${BMIJohn2}. John's BMI score is ${BMIMark2}`
  );
}

console.log(markHigherBMI2);
