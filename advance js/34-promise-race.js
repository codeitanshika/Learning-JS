const fast = new Promise(resolve =>
    setTimeout(() => resolve("Fast"), 1000)
);

const slow = new Promise(resolve =>
    setTimeout(() => resolve("Slow"), 3000)
);

Promise.race([fast, slow])
    .then(console.log);