/** 
 * Filename: complexCodeExample.js
 * 
 * Description: 
 * This code serves as a complex example showcasing various JavaScript concepts and techniques. It combines advanced features such as closures, generators, async/await, Promises, and more.
 * 
 * Author: Your Name
 * Date: YYYY-MM-DD
 */

// Define a class to create a person object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an instance of the Person class
const john = new Person("John Doe", 25);
john.greet();

// Implement a generator function to generate a sequence of numbers
function* numberGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Use the generator function to loop through and print numbers
const numbers = numberGenerator(1, 10);
for (const num of numbers) {
  console.log(num);
}

// Define an async function that returns a Promise after a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Use async/await to control the flow of execution
async function fetchData() {
  console.log("Fetching data...");
  await delay(2000);
  console.log("Data fetched!");
  return { name: "John Doe", age: 25 };
}

// Handle the Promise returned by the async function
fetchData()
  .then((data) => {
    const person = new Person(data.name, data.age);
    person.greet();
  })
  .catch((error) => console.error(error));

// Implement a closure to create a reusable counter
function counter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
  };
}

// Use the closure to create multiple counters and modify their values
const counter1 = counter();
counter1.increment();
console.log(counter1.getCount());

const counter2 = counter();
counter2.increment();
counter2.increment();
counter2.decrement();
console.log(counter2.getCount());

// Define a higher-order function that returns a decorated function
function decorator(func) {
  return function (...args) {
    console.log("Calling decorated function...");
    const result = func(...args);
    console.log("Decorated function called!");
    return result;
  };
}

// Apply the decorator to a function and observe the behavior
function add(a, b) {
  return a + b;
}

const decoratedAdd = decorator(add);
console.log(decoratedAdd(2, 3));

// Implement a custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Throw and catch the custom error
try {
  throw new CustomError("Something went wrong!");
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// Use destructuring assignment to extract values from objects
const { name, age } = john;
console.log(`Name: ${name}, Age: ${age}`);

// Demonstrate the spread operator with an array
const numbersArray = [1, 2, 3];
const mergedArray = [...numbersArray, 4, 5, 6];
console.log(mergedArray);

// Use the map() function to transform an array
const mappedArray = numbersArray.map((num) => num * 2);
console.log(mappedArray);

// Implement a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

// ... More complex code continues here ...

// This code example provides a glimpse into the complexity and versatility of JavaScript. It covers various advanced concepts and demonstrates their usage in different scenarios. Feel free to explore the code further and experiment with it.