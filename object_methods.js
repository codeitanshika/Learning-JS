//object
let student = {
    name: "Anshika",
    age: 21,
    course: "B.Tech"
};

console.log(student);

// keys and values
let keys = Object.keys(student);
console.log(keys);

console.log(Object.values(student));

console.log(Object.entries(student));

Object.entries(student).forEach(([key,value])=>{

    console.log(key,value);

});

//assign
let copy=Object.assign({},student);

console.log(copy);

let personal={
    name:"Anshika",
    age:21
};

let education={
    course:"B.Tech",
    cgpa:8.6
};

let result=Object.assign({},personal,education);

console.log(result);
let student={
    name:"Anshika",
    age:21
};

Object.freeze(student);

student.age=25;

student.city="Delhi";

delete student.name;

console.log(student);