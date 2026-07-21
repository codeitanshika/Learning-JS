// promise-polyfill.js

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
    constructor(executor) {
        this.state = PENDING;
        this.value = undefined;
        this.reason = undefined;

        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state !== PENDING) return;

            this.state = FULFILLED;
            this.value = value;

            this.onFulfilledCallbacks.forEach(callback => callback(value));
        };

        const reject = (reason) => {
            if (this.state !== PENDING) return;

            this.state = REJECTED;
            this.reason = reason;

            this.onRejectedCallbacks.forEach(callback => callback(reason));
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {

        if (this.state === FULFILLED) {
            queueMicrotask(() => onFulfilled?.(this.value));
        }

        else if (this.state === REJECTED) {
            queueMicrotask(() => onRejected?.(this.reason));
        }

        else {

            this.onFulfilledCallbacks.push((value) => {
                queueMicrotask(() => onFulfilled?.(value));
            });

            this.onRejectedCallbacks.push((reason) => {
                queueMicrotask(() => onRejected?.(reason));
            });

        }

        return this;
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }
}