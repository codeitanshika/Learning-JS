// Unremoved Event Listener
const button = document.querySelector("button");

function clickHandler() {
    console.log("Clicked");
}

button.addEventListener("click", clickHandler);

// Remove when no longer needed
button.removeEventListener("click", clickHandler);
// Uncleared Interval
const id = setInterval(() => {
    console.log("Running...");
}, 1000);

// Stop it
clearInterval(id);
// Global Variable Leak
// Bad (creates global variable in non-strict mode)
name = "Anshika";

// Good
let name = "Anshika";