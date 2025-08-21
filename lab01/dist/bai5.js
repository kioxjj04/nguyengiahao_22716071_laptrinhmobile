"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(money) {
        console.log("Balance: " + this.balance);
        this.balance += money;
        console.log("Balance: " + this.balance + '(+' + money + ')');
    }
    withdraw(money) {
        console.log("Balance: " + this.balance);
        this.balance -= money;
        console.log("Balance: " + this.balance + '(-' + money + ')');
    }
}
exports.BankAccount = BankAccount;
