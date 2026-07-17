// Cache the result of expensive computations.
function memoize(fn) {
    const cache = {};

    return function (num) {
        if (cache[num] !== undefined) {
            console.log("From Cache");
            return cache[num];
        }

        console.log("Calculated");
        cache[num] = fn(num);
        return cache[num];
    };
}

function square(num) {
    return num * num;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));