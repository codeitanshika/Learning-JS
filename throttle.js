// basic impl
// throttle.js

function throttle(func, delay) {
    let lastExecutionTime = 0;

    return function (...args) {
        const context = this;
        const now = Date.now();

        if (now - lastExecutionTime >= delay) {
            lastExecutionTime = now;
            func.apply(context, args);
        }
    };
}