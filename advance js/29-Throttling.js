// allows the function to run at most once in a specified time interval.
function throttle(fn, delay) {
    let canRun = true;

    return function () {
        if (!canRun) return;

        fn();
        canRun = false;

        setTimeout(() => {
            canRun = true;
        }, delay);
    };
}

function logScroll() {
    console.log("Scrolling...");
}

const throttledScroll = throttle(logScroll, 1000);

// Imagine this is called continuously while scrolling
throttledScroll();