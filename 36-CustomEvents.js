// Create custom event
const loginEvent = new CustomEvent("userLogin", {
    detail: {
        username: "John"
    }
});

// Listen for event
document.addEventListener("userLogin", (event) => {
    console.log(event.detail.username);
});

// Trigger event
document.dispatchEvent(loginEvent);