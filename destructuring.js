let student = {
    name: "Anshika",
    age: 21,
    city: "Ghaziabad"
};

let { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);

//array dest
let colors = ["Red", "Blue", "Green"];

let [first, second] = colors;

console.log(first);
console.log(second);

//object destructuring
let student = {
    name: "Anshika",
    age: 21,
    course: "B.Tech"
};
let { name, age } = student;

console.log(name);
console.log(age);

//rest operator
let nums = [10,20,30,40,50];

let [first, ...rest] = nums;

console.log(first);
console.log(rest);