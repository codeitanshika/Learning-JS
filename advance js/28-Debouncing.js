// Debouncing = Execute after the user stops.
function debounce(fn, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn();
        }, delay);
    };
}

function search() {
    console.log("Searching...");
}

const debouncedSearch = debounce(search, 1000);

// Imagine this is called on every key press
debouncedSearch();