const person1 = {
    name: "Anshika"
};

const person2 = {
    name: "Rahul"
};

function greet(city, country) {
    console.log(
        `Hi, I'm ${this.name} from ${city}, ${country}`
    );
}

// call()
greet.call(person1, "Delhi", "India");

// apply()
greet.apply(person2, ["Mumbai", "India"]);

// bind()
const greetPerson1 = greet.bind(person1, "Lucknow", "India");
greetPerson1();