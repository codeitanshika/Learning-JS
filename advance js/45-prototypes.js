const person = {
    greet() {
        console.log("Hello!");
    }
};

const student = Object.create(person);

student.name = "Anshika";

console.log(student.name);
student.greet();