function getMessage() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data Loaded"), 2000);
    });
}

async function displayMessage() {
    const message = await getMessage();
    console.log(message);
}

displayMessage();

// Promise
fetchData()
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Async/Await
try {
    const data = await fetchData();
    console.log(data);
} catch (err) {
    console.log(err);
}