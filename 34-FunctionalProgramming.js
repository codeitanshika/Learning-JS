// Pure
function square(n) {
    return n * n;
}

// Impure
let total = 0;

function addToTotal(n) {
    total += n; // modifies external state
}