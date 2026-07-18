const p1 = Promise.reject("Server 1 Failed");

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Server 2 Success"), 2000)
);

const p3 = new Promise(resolve =>
    setTimeout(() => resolve("Server 3 Success"), 1000)
);

Promise.any([p1, p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log(err));
    // Returns the first fulfilled (successful) promise.