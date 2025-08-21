//23. Create an interface Payment with method pay(amount). Implement CashPayment and
// CardPayment.
interface Payment {
    pay(amount: number): void;
}
export class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Bai 23: Paid ${amount} in cash.`);
    }
}

export class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Bai 23: Paid ${amount} with credit card.`);
    }
}
