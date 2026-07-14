function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
};

const p1 = new Person("Anshika");
const p2 = new Person("Rahul");

p1.sayHello();
p2.sayHello();