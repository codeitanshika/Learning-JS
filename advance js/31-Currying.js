// transforming a function that takes multiple arguments into a sequence of functions, each taking one argument.
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = multiply(2);

console.log(double(5));
console.log(double(10));