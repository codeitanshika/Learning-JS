
class BankAccount {
    #balance = 1000;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance()); // 1500

// console.log(account.#balance); // Error