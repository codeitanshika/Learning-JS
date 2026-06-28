let student={
    name:"Anshika",
    age:21,
    city:"Delhi"
};

console.log(student.name);

student.course="BTech";

console.log(student);

delete student.city;

console.log(student);

// Destructuring

const {name,age}=student;

console.log(name);
console.log(age);