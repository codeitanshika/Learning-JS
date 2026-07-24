// Store
localStorage.setItem("username", "John");

// Read
const name = localStorage.getItem("username");

console.log(name);

// Delete
localStorage.removeItem("username");

// Delete everything
localStorage.clear();

const user = {
    name: "John",
    age: 25
};

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(
    localStorage.getItem("user")
);

console.log(storedUser.name);