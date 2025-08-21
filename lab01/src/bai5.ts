//5. Create a class BankAccount with balance. Add methods deposit() and withdraw().

export class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(money: number) : void {
        console.log("Balance: " + this.balance);
        this.balance += money;
        console.log("Balance: " + this.balance + '(+' + money + ')');
    }

    withdraw(money: number) : void {
        console.log("Balance: " + this.balance);
        this.balance -= money;
        console.log("Balance: " + this.balance + '(-' + money + ')');
    }
}