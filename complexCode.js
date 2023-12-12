/**************************************************************
 * Filename: complexCode.js
 * Description: A complex code snippet showcasing advanced JavaScript features and concepts.
 * Author: OpenAI
 ==============================================================*/

// Define a class representing a Person
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create two instances of Person
const john = new Person("John", 30, "male");
const jane = new Person("Jane", 25, "female");

john.introduce();
jane.introduce();

// Define a class representing a Book
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayInfo() {
        console.log(`"${this.title}" written by ${this.author} in ${this.year}`);
    }
}

// Create an array of books
const books = [
    new Book("Book 1", "Author 1", 2020),
    new Book("Book 2", "Author 2", 2018),
    new Book("Book 3", "Author 3", 2015),
    new Book("Book 4", "Author 4", 2012),
    new Book("Book 5", "Author 5", 2010)
];

// Display info of each book
books.forEach(book => book.displayInfo());

// Define a function that finds the maximum number in an array
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

const numbers = [10, 87, 24, 56, 91, 45, 6];
console.log("Max number:", findMax(numbers));

// Implement a custom sorting algorithm
function bubbleSort(array) {
    let len = array.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    return array;
}

const unsortedArray = [9, 3, 6, 1, 2, 8, 4, 5, 7];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

// Use arrow functions, array reduce, and template literals
const fruits = [
    { name: "Apple", price: 1.99 },
    { name: "Orange", price: 0.99 },
    { name: "Banana", price: 0.49 },
    { name: "Grapes", price: 2.99 }
];

const totalPrice = fruits.reduce((acc, fruit) => acc + fruit.price, 0);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);

// Use async/await and Promises
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeAsyncTask() {
    console.log("Starting async task...");
    await delay(2000);
    console.log("Async task completed.");
}

executeAsyncTask();