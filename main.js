// arrow function
function sum(a, b) {
  return a + b;
}

const sumArrowFunction = (a, b) => {
  return a + b;
};
// let / var / const
var myVarible = 2;
let myLocalVariable = 2;
const pi = 3.14;
// loop
let people = [
  { name: "Abdel Aziz", age: 18 },
  { name: "Aziz", age: 18 },
  { name: "Bilel", age: 29 },
  { name: "Anas", age: 29 },
];

for (let i = 0; i < people.length; i++) {
  let person = people[i];
  console.log(person.name);
}
// forEach
// console.log("\nforEach Function");
// people.forEach((person) => {
//   console.log(person.name);
//   person.age = 18;
//   console.log(person.age);
// });
// map
// let tenYearArray = people.map((person) => person.age + 10);
// console.log(tenYearArray);
// filter
let onlyStudentArray = people.filter((person) => person.name !== "Anas");
console.log(onlyStudentArray);
let onlyAgeArray = people.filter(person=> person.age<20)
console.log(onlyAgeArray)
// find
let bilel = people.find(person=> person.name === "Bilel")
console.log(bilel)

// Reducer 
let array = [1,2,3,4,5,6,7]
function reducers(a,b){a+b}
const reducer = (a, b) => a+ b;
let total = array.reduce(reducers)
console.log(`The is ${total}`)

// Challenge
// Create a function that removes duplicated elements an given array 
// using forEach or map or filter 
// example
// removeDubs([a,b,c,a,a]) => [a,b,c]

//





