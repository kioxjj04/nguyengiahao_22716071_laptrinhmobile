"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Product = void 0;
//26. Create a class Order with list of products. Add method to calculate total price.
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
    listProducts() {
        console.log("Products in order:");
        this.products.forEach((product) => console.log(`${product.name}: $${product.price.toFixed(2)}`));
    }
}
exports.Order = Order;
