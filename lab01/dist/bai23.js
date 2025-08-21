"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment = exports.CashPayment = void 0;
class CashPayment {
    pay(amount) {
        console.log(`Bai 23: Paid ${amount} in cash.`);
    }
}
exports.CashPayment = CashPayment;
class CardPayment {
    pay(amount) {
        console.log(`Bai 23: Paid ${amount} with credit card.`);
    }
}
exports.CardPayment = CardPayment;
