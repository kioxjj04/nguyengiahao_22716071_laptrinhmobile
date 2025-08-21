"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai12_1 = require("./bai12");
const bai12_2 = require("./bai12");
const Bai13_1 = require("./Bai13");
const Bai14_1 = require("./Bai14");
const Bai15_1 = require("./Bai15");
const Bai16_1 = require("./Bai16");
const Bai18_1 = require("./Bai18");
const Bai17_1 = require("./Bai17");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_2 = require("./bai23");
const bai24_2 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai27_1 = require("./bai27");
const bai30_1 = require("./bai30");

const bai1 = new bai1_1.Person('Lucas', 18);
bai1.printInfo();

const bai2 = new bai2_1.Student('John', 20, 9.5);
bai2.printInfo();

const bai3 = new bai3_1.Car('Tesla', 'model S', 2025);
bai3.printCar();

const bai4 = new bai4_1.Rectangle(5, 6);
console.log('Bai 4: Area: ' + bai4.area() + 'perimeter: ' + bai4.perimeter());

const bai5 = new bai5_1.BankAccount(0);
console.log('Bai 5: \nDeposit: ' + bai5.deposit(10) + '\nWithdraw: ' + bai5.withdraw(5));

const bai6 = new bai6_1.Book('x', 'y', 2000);
console.log('Bai 6: ' + bai6);

const bai7 = new bai7_1.User('Alice');
console.log('Bai 7: ' + bai7.getName());
console.log('Set new name: Bob');

bai7.setName('Bob');
console.log('Bai 7: ' + bai7.getName());

const bai8 = [
    new bai8_1.Product("Product 1", 50),
    new bai8_1.Product("Product 2", 150),
    new bai8_1.Product("Product 3", 200),
];
const filteredProducts = bai8.filter(product => product.price > 100);
console.log('Filtered Products: ', filteredProducts);

const bai10 = new bai10_1.Account("123456", "Bob", 1000);
console.log('Bai 10: Account Number: ' + bai10.accountNumber + ', Account Name: ' + bai10.accountName + ', Balance: ' + bai10.getBalance());

const bai11Dog = new bai11_1.Dog("dog");
const bai11Cat = new bai11_1.Cat("cat");
bai11Dog.bark();
bai11Cat.meow();

const bai12Bird = new bai12_1.Bird();
const bai12Fish = new bai12_2.Fish();
bai12Bird.fly();
bai12Fish.swim();

const bai13Square = new Bai13_1.Square(4);
const bai13Circle = new Bai13_1.Circle(3);
console.log('Bai 13: Square Area: ' + bai13Square.area() + ', Circle Area: ' + bai13Circle.area());

const bai14Manager = new Bai14_1.Manager("Alice");
const bai14Developer = new Bai14_1.Developer("Bob");
console.log('Bai 14: Manager Name: ' + bai14Manager.manage);
console.log('Bai 14: Developer Name: ' + bai14Developer.code);

const bai15 = new Bai15_1.Library();
bai15.addBook(new Bai15_1.Book1("The Great Gatsby", "F. Scott Fitzgerald"));
bai15.addUser(new Bai15_1.User1("John Doe"));
bai15.listBooks();
bai15.listUsers();

const bai16 = new Bai16_1.Box('Hello World');
console.log('\nBai 16: Box Value: ' + bai16.getValue());

const bai17 = new Bai17_1.Logger();
bai17.log('This is a log message');

console.log('\nBai 18: Sum of 5 and 10: ' + Bai18_1.MathUtil.add(5, 10));

const bai20Car = new bai20_1.Car1();
const bai20Bike = new bai20_1.Bike();
bai20Car.start();
bai20Bike.start();

const bai21 = new bai21_1.Repository();
bai21.add(new bai8_1.Product("Product 1", 50));
bai21.add(new bai8_1.Product("Product 2", 150));

const bai22 = new bai22_1.Stack();
bai22.push(1);
bai22.push(2);
bai22.pop();
console.log('\nBai 22: Stack Top: ' + bai22.peek());

const bai23 = new bai23_2.CardPayment();
const bai23_1 = new bai23_2.CashPayment();
bai23.pay(100);
bai23_1.pay(50);

const bai24 = new bai24_2.Fan();
const bai24_1 = new bai24_2.AirConditioner();
bai24.turnOn();
bai24_1.turnOn();

bai25_1.Shape2.describe();

console.log('\nBai 26:');
const bai26 = new bai26_1.Order();
bai26.addProduct(new bai8_1.Product("Product 1", 50));
bai26.addProduct(new bai8_1.Product("Product 2", 150));
bai26.listProducts();
console.log('Total Price: $' + bai26.calculateTotal().toFixed(2));

const dog = new bai28_1.Dog1();
const cat = new bai28_1.Cat1();
dog.makeSound();
cat.makeSound();

console.log('\nBai 29:');
const car = new bai29_1.Car2();
car.move();
const robot = new bai29_1.Robot();
robot.move();

console.log('\nBai 30');
const school = new bai30_1.School();
school.addStudent(new bai2_1.Student('Alice', 18, 9.0));
school.addTeacher(new bai27_1.Teacher('Mr. Smith', 40, 'Math'));
school.displayInfo();