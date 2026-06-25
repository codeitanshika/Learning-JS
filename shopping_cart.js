// A shopping cart that processes orders
const cart = [
  { item: "book",   price: 0,   inStock: true  },
  { item: "pen",    price: 5,   inStock: true  },
  { item: "laptop", price: 999, inStock: false },
  { item: "mug",    price: 12,  inStock: true  },
];

const checkout = cart
  .filter(p => p.inStock)              // Scene 5: bouncer machine — drop out-of-stock
  .map(p => ({ ...p, price: p.price * 1.1 }))  // Scene 2 + 5: NEW objects (no mutation!) + transform
  .filter(p => p.price ?? false);       // Scene 3: ?? keeps price 0 as a real value — careful!

const total = checkout.reduce((sum, p) => sum + p.price, 0);  // Scene 5: collapse

console.log(checkout);
console.log("Total:", total);
console.log("Original cart untouched:", cart);  // Scene 2: prove we never wrecked the original