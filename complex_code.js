/*
Filename: complex_code.js

Description: This code simulates a virtual shopping cart for an online store. It includes complex functionality such as adding and removing items, calculating the total cost, applying discounts, and checking out. The code is designed to handle a large number of products and to provide a seamless shopping experience for users.

Note: This code is for illustrative purposes only and does not include any actual product data or UI implementation.

*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemName) {
    this.items = this.items.filter(item => item.name !== itemName);
  }

  getTotalCost() {
    let total = 0;
    this.items.forEach(item => {
      total += item.price;
    });
    return total;
  }

  applyDiscount(discountPercentage) {
    const discountFactor = 1 - discountPercentage / 100;
    this.items.forEach(item => {
      item.price *= discountFactor;
    });
  }

  checkout() {
    const totalCost = this.getTotalCost();
    // Implementation of payment and order processing logic goes here
    console.log(`Successfully checked out. Total cost: $${totalCost}`);
  }
}

// Example usage:

const cart = new ShoppingCart();

const product1 = new Product("Smartphone", 599.99);
const product2 = new Product("Laptop", 1299.99);
const product3 = new Product("Headphones", 99.99);

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);

console.log(cart.getTotalCost()); // Output: 1999.97

cart.removeItem("Laptop");

console.log(cart.getTotalCost()); // Output: 699.98

cart.applyDiscount(10);

console.log(cart.getTotalCost()); // Output: 629.982

cart.checkout(); // Output: Successfully checked out. Total cost: $629.982

// Add more products and test additional functionality as needed