import { Person } from "./bai1";
import { Account } from "./bai10";
import { Cat, Dog } from "./bai11";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";
import { Bird } from "./bai12";
import { Fish } from "./bai12";
import { Animal2 } from "./bai9";
import { Square, Circle } from "./Bai13";
import { Developer, Manager } from "./Bai14";
import { Library, Book1, User1 } from "./Bai15";
import { Box } from "./Bai16";
import { MathUtil } from "./Bai18";
import { Logger } from "./Bai17";
import { Animal3, Dog2 } from "./bai19";
import { Bike, Car1 } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { CardPayment, CashPayment } from "./bai23";
import { Fan, AirConditioner } from "./bai24";
import { Shape2 } from "./bai25";
import { Order } from "./bai26";
import { Animal1, Dog1, Cat1 } from "./bai28";
import { Car2, Robot } from "./bai29";
import { Teacher } from "./bai27";
import { School } from "./bai30";

const bai1 = new Person('Lucas', 18);
bai1.printInfo()

const bai2 = new Student('John', 20, 9.5);
bai2.printInfo();

const bai3 = new Car('Tesla', 'model S', 2025);
bai3.printCar();

const bai4= new Rectangle(5, 6);
console.log('Bai 4: Area: ' + bai4.area() + 'perimeter: '+ bai4.perimeter());

const bai5 = new BankAccount(0);
console.log('Bai 5: \nDeposit: ' + bai5.deposit(10) +'\nWithdraw: ' + bai5.withdraw(5));

const bai6 = new Book('x', 'y', 2000);
console.log('Bai 6: ' + bai6);

const bai7 = new User('Alice')
console.log('Bai 7: ' + bai7.getName());
console.log('Set ten moi: Bob');
bai7.setName('Bob');
console.log('Bai 7: ' + bai7.getName());

const bai8: Product[] = [
    new Product("Product 1", 50),
    new Product("Product 2", 150),
    new Product("Product 3", 200),
];

const filteredProducts = bai8.filter(product => product.price > 100);
console.log('Filtered Products: ', filteredProducts);


const bai10 = new Account("123456", "Bob", 1000);
console.log('Bai 10: Account Number: ' + bai10.accountNumber + ', Account Name: ' + bai10.accountName + ', Balance: ' + bai10.getBalance());

const bai11Dog = new Dog("dog");
const bai11Cat = new Cat("cat");
bai11Dog.bark();
bai11Cat.meow();

const bai12Bird = new Bird();
const bai12Fish = new Fish();
bai12Bird.fly();
bai12Fish.swim();

const bai13Square = new Square(4);
const bai13Circle = new Circle(3);
console.log('Bai 13: Square Area: ' + bai13Square.area() + ', Circle Area: ' + bai13Circle.area());

const bai14Manager = new Manager("Alice");
const bai14Developer = new Developer("Bob");
console.log('Bai 14: Manager Name: ' + bai14Manager.manage);
console.log('Bai 14: Developer Name: ' + bai14Developer.code);

const bai15 = new Library();
bai15.addBook(new Book1("The Great Gatsby", "F. Scott Fitzgerald"));
bai15.addUser(new User1("John Doe"));
bai15.listBooks();
bai15.listUsers();

const bai16 = new Box('Hello World');
console.log('\nBai 16: Box Value: ' + bai16.getValue());

const bai17 = new Logger();
bai17.log('This is a log message');

console.log('\nBai 18: Sum of 5 and 10: ' + MathUtil.add(5, 10));

const bai20Car = new Car1();
const bai20Bike = new Bike();
bai20Car.start();
bai20Bike.start();

const bai21 = new Repository();
bai21.add(new Product("Product 1", 50));
bai21.add(new Product("Product 2", 150));

const bai22 = new Stack();
bai22.push(1);
bai22.push(2);
bai22.pop();
console.log('\nBai 22: Stack Top: ' + bai22.peek());

const bai23 = new CardPayment();
const bai23_1 = new CashPayment();
bai23.pay(100);
bai23_1.pay(50);

const bai24 = new Fan();
const bai24_1 = new AirConditioner();
bai24.turnOn();
bai24_1.turnOn();

Shape2.describe();

console.log('\nBai 26:');
const bai26 = new Order();
bai26.addProduct(new Product("Product 1", 50));
bai26.addProduct(new Product("Product 2", 150));

bai26.listProducts();
console.log('Total Price: $' + bai26.calculateTotal().toFixed(2));

const dog: Animal1 = new Dog1();
const cat: Animal1 = new Cat1();
dog.makeSound();
cat.makeSound();

console.log('\nBai 29:');
const car = new Car2();
car.move();
const robot = new Robot();
robot.move();

console.log('\nBai 30');
const school = new School();
school.addStudent(new Student('Alice', 18, 9.0));
school.addTeacher(new Teacher('Mr. Smith', 40,'Math'));
school.displayInfo();