// 1. Create a Class and Object
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar);

// 2. Add Methods to a Class
class CarWithMethod {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting the ${this.make} ${this.model}`);
    }
}

const myCarWithMethod = new CarWithMethod('Honda', 'Accord');
myCarWithMethod.start();

// 3. Constructor Method
class CarWithConstructor {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting the ${this.make} ${this.model}`);
    }
}

const myCarWithConstructor = new CarWithConstructor('Ford', 'Mustang');
myCarWithConstructor.start();

// 4. Simple Inheritance
class ElectricCar extends Car {
    constructor(make, model, batterySize) {
        super(make, model);
        this.batterySize = batterySize;
    }
}

const myElectricCar = new ElectricCar('Tesla', 'Model S', '100 kWh');
console.log(myElectricCar);

// Private Access Modifier
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Insufficient balance');
            return;
        }
        this.#balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
    }
}

const myAccount = new Account(1000);
myAccount.deposit(500);
myAccount.withdraw(200);

// Getter and Setter Methods
class AccountWithGetterSetter {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(newBalance) {
        if (newBalance < 0) {
            console.log('Balance cannot be negative');
            return;
        }
        this.#balance = newBalance;
    }
}

const myAccountWithGetterSetter = new AccountWithGetterSetter(2000);
console.log(myAccountWithGetterSetter.balance);
myAccountWithGetterSetter.balance = 2500;
console.log(myAccountWithGetterSetter.balance);
