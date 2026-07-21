// mini-event-emitter.js

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(listener);
    }

    emit(eventName, ...args) {
        if (!this.events[eventName]) return;

        this.events[eventName].forEach(listener => {
            listener(...args);
        });
    }

    off(eventName, listenerToRemove) {
        if (!this.events[eventName]) return;

        this.events[eventName] = this.events[eventName].filter(
            listener => listener !== listenerToRemove
        );
    }

    once(eventName, listener) {
        const wrapper = (...args) => {
            listener(...args);
            this.off(eventName, wrapper);
        };

        this.on(eventName, wrapper);
    }

    listenerCount(eventName) {
        return this.events[eventName]
            ? this.events[eventName].length
            : 0;
    }

    removeAllListeners(eventName) {
        if (eventName) {
            delete this.events[eventName];
        } else {
            this.events = {};
        }
    }
}

// ----------------------
// Testing
// ----------------------

const emitter = new EventEmitter();

function greet(name) {
    console.log(`Hello ${name}`);
}

emitter.on("welcome", greet);

emitter.emit("welcome", "Anshika");

console.log(emitter.listenerCount("welcome"));

emitter.off("welcome", greet);

emitter.emit("welcome", "John");

emitter.once("login", user => {
    console.log(`${user} logged in.`);
});

emitter.emit("login", "Alice");
emitter.emit("login", "Bob");