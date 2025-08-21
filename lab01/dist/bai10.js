"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//10. Create a class Account with public, private and readonly fields.
exports.Account = void 0;
class Account {
    constructor(accountNumber, accountName, initialBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
exports.Account = Account;
