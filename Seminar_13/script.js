// Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

const mergeArrays = function (arr1, arr2) {
    return [...arr1, ...arr2];
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

const removeDuplicates = function (...rest) {
    const newArray = rest.filter((el, index) => {
        return rest.indexOf(el) === index;
    });
    return newArray;
}

const removeDuplicates1 = function (...rest) {
    const newArray = [...new Set(rest)];
    return newArray;
}

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));
console.log(removeDuplicates1(1, 2, 3, 2, 4, 1, 5));

// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

const getEvenNumbers = function (arr) {
    return arr.filter(el => el % 2 === 0);
}
const array = [1, 3, 4, 2, 8, 15];

console.log(getEvenNumbers(array));
console.log(array);

// Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

const calculateAverage = function (arr) {
    return arr.reduce((el, acc) => (acc + el)) / arr.length;
}
console.log(calculateAverage(array));

// Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

const capitalizeFirstLetter = function (str) {
    return str.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
}
console.log(capitalizeFirstLetter('jhgjh jkhgjg uewu oewiur'));

// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

const createCalculator = function (def) {
    return {
        value: def,
        add(num) {
            this.value += num;
            return this.value;
        },
        sub(num) {
            this.value -= num;
            return this.value;
        }
    }
}

const objEl = createCalculator(10);
console.log(objEl.add(5));
console.log(objEl.sub(3));

const objEl1 = createCalculator(20);
console.log(objEl1.add(5));
console.log(objEl1.sub(3));

// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = function (name) {
    return () => `Привет, ${name}!`;
}

const greeting = createGreeting('Евгений');
console.log(greeting());

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

const createPasswordChecker = function (lenPass) {
    return (password) => password.length <= lenPass;
}

const isPasswordValid = createPasswordChecker(7);
console.log(isPasswordValid('password')); // Ожидаемый результат: false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

const sumDigits = function (num) {
    if (num < 10) {
        return num;
    }
    else {
        return num % 10 + sumDigits(Math.floor(num / 10));
    }
}

console.log(sumDigits(123))
console.log(sumDigits(456789));