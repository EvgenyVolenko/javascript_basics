// Задание 1: ""Управление персоналом компании""
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith
// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Имя сотрудника - ${this.name}.`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Имя сотрудника - ${this.name} из депертамента "${this.department}".`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// ""Управление списком заказов""
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        let sum = 0;
        this.products.forEach(product => {
            sum += product.price;
        });
        return sum;
    }
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice());

// Управление животными в зоопарке
// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:
// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.
// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).
// Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле в соответствии с описанием.

class ZooAnimal {
    static #MAX_AGE = 25;
    #name;
    #age;
    #gender;

    constructor(name, age, gender) {
        this.#name = name;
        if (age > ZooAnimal.#MAX_AGE) {
            throw new Error(`Ошибка при создании экземпляра класса. Возраст животного не может быть больше ${ZooAnimal.#MAX_AGE}`);
        }
        this.#age = age;
        if (gender.toUpperCase() !== 'М' && gender.toUpperCase() !== 'Ж') {
            throw new Error(`Ошибка при создании экземпляра класса. Такого пола "${gender}" быть не может. Укажите М или Ж.`);
        }
        this.#gender = gender;
    }
    changeName(newName) {
        this.#name = newName;
    }
    changeAge(newAge) {
        this.#age = newAge;
    }

    get name() { return this.#name; }
    get age() { return this.#age; }
    get gender() { return this.#gender; }
}

const animal1 = new ZooAnimal('Вася', 15, 'м');
console.log(`Кличка - ${animal1.name}, возраст - ${animal1.age}, пол - ${animal1.gender}`);
animal1.changeName('Васёк');
animal1.changeAge(16);
console.log(`Кличка - ${animal1.name}, возраст - ${animal1.age}, пол - ${animal1.gender}`);

const animal2 = new ZooAnimal('Рита', 5, 'n');