// An array containing product data
var products = [
  { id: 1, name: 'Pen', price: 5.99 },
  { id: 2, name: 'Notebook', price: 9.99 },
  { id: 3, name: 'Eraser', price: 2.49 },
  { id: 4, name: 'Paperclip', price: 1.99 }
];

// Cart object
var cart = {
  items: [],
  
  // Method to add an item to the cart
  addItem: function(productId) {
    var product = products.find(function(item) {
      return item.id === productId;
    });
    
    if (product) {
      this.items.push(product);
      console.log(product.name + ' added to the cart.');
    } else {
      console.log('Product not found.');
    }
  },
  
  // Method to remove an item from the cart
  removeItem: function(productId) {
    var index = this.items.findIndex(function(item) {
      return item.id === productId;
    });
    
    if (index !== -1) {
      var removedProduct = this.items.splice(index, 1)[0];
      console.log(removedProduct.name + ' removed from the cart.');
    } else {
      console.log('Product not found in your cart.');
    }
  },
  
  // Method to calculate the total price of the cart
  calculateTotal: function() {
    var total = 0;
    
    this.items.forEach(function(item) {
      total += item.price;
    });
    
    return total.toFixed(2);
  },
  
  // Method to print the items in the cart
  printItems: function() {
    console.log('Items in your cart:');
    
    if (this.items.length === 0) {
      console.log('Your cart is empty.');
    } else {
      this.items.forEach(function(item) {
        console.log(item.name + ' - Price: $' + item.price.toFixed(2));
      });
    }
  }
};

// Example of adding items to the cart
cart.addItem(2); // Notebook added to the cart.
cart.addItem(1); // Pen added to the cart.
cart.addItem(5); // Product not found.

// Example of printing the cart
cart.printItems();
// Items in your cart:
// Notebook - Price: $9.99
// Pen - Price: $5.99

// Example of calculating the total price
var total = cart.calculateTotal();
console.log('Total Price: $' + total);
// Total Price: $15.98

// Example of removing items from the cart
cart.removeItem(2); // Notebook removed from the cart.
cart.removeItem(4); // Product not found in your cart.

// Example of printing the updated cart
cart.printItems();
// Items in your cart:
// Pen - Price: $5.99

// Example of calculating the updated total price
var updatedTotal = cart.calculateTotal();
console.log('Updated Total Price: $' + updatedTotal);
// Updated Total Price: $5.99
