//26. Create a class Order with list of products. Add method to calculate total price.
export class Product {
    constructor(public name: string, public price: number) {}
}
export class Order {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    listProducts(): void {
        console.log("Products in order:");
        this.products.forEach((product) => console.log(`${product.name}: $${product.price.toFixed(2)}`));
    }
}