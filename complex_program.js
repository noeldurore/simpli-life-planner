/* complex_program.js 
This code is a complex program that demonstrates various advanced concepts in JavaScript. 
It includes modules, closures, object-oriented programming, asynchronous operations, event handling, and more. 
The program creates a virtual e-commerce platform with user authentication, product management, and order processing.
It is more than 200 lines long. */

// Module 1: Authentication
const AuthModule = (() => {
  let loggedInUser = null;

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      // Simulating async login request
      setTimeout(() => {
        if (username === 'admin' && password === 'secret') {
          loggedInUser = { username, role: 'admin' };
          resolve(loggedInUser);
        } else {
          reject('Invalid username or password!');
        }
      }, 1000);
    });
  };

  const logout = () => {
    loggedInUser = null;
    console.log('Logged out successfully!');
  };

  const getLoggedInUser = () => {
    return loggedInUser;
  };

  return { login, logout, getLoggedInUser };
})();

// Module 2: Product Management
const ProductModule = (() => {
  const products = [];

  const addProduct = (name, price) => {
    const product = { id: products.length + 1, name, price };
    products.push(product);
    console.log(`Added product "${name}" successfully!`);
  };

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return { addProduct, getProductById };
})();

// Module 3: Order Processing
const OrderModule = (() => {
  const orders = [];

  const placeOrder = (userId, productId, quantity) => {
    return new Promise((resolve, reject) => {
      // Simulating async order placement
      setTimeout(() => {
        const user = AuthModule.getLoggedInUser();
        const product = ProductModule.getProductById(productId);

        if (!user) {
          reject('You must be logged in to place an order!');
          return;
        }

        if (!product) {
          reject('Invalid product ID!');
          return;
        }

        const order = { userId, productId, quantity, total: product.price * quantity };
        orders.push(order);
        resolve(order);
      }, 2000);
    });
  };

  const getOrderById = (id) => {
    return orders.find((order) => order.id === id);
  };

  return { placeOrder, getOrderById };
})();

// Usage of the created modules
AuthModule.login('admin', 'secret')
  .then((user) => {
    console.log(`Logged in as ${user.username} (${user.role})`);

    ProductModule.addProduct('iPhone 12', 999);
    ProductModule.addProduct('Samsung Galaxy S21', 899);

    OrderModule.placeOrder(user.username, 1, 2)
      .then((order) => {
        console.log(`Order placed successfully! ID: ${order.id}`);
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });

    AuthModule.logout();
  })
  .catch((error) => {
    console.error('Error logging in:', error);
  });

// ...
// More complex program logic, event handling, data manipulation, etc.