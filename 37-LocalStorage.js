// Store
localStorage.setItem("username", "John");

// Read
const name = localStorage.getItem("username");

console.log(name);

// Delete
localStorage.removeItem("username");

// Delete everything
localStorage.clear();