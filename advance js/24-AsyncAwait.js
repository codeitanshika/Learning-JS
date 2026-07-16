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