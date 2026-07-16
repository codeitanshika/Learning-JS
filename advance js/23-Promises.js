const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Success!");
    } else {
        reject("Something went wrong.");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise completed."));
    // A Promise is an object that represents the eventual result of an asynchronous operation (success or failure).

// Promise = A placeholder for a future value.