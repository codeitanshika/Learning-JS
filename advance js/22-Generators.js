// Generator = Function that pauses and resumes.
function* greet() {
    yield "Hello";
    yield "World";
}

const g = greet();

console.log(g.next().value);
console.log(g.next().value);