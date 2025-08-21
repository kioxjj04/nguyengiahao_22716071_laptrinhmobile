//10. Create a class Account with public, private and readonly fields.
export class Account {
    public accountNumber: string;
    private balance: number;
    readonly accountName: string;

    constructor(accountNumber: string, accountName: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}