// Map = Advanced object for storing key-value pairs.

const map = new Map();

map.set("name", "Anshika");
map.set("age", 21);

console.log(map.get("name"));
console.log(map.size);

const user = { id: 1 };

const map = new Map();

map.set(user, "Developer");

console.log(map.get(user));