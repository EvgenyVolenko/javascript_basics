// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cubeFunc = digit => {
    const result = digit ** 3;
    return result;
}

const sum = cubeFunc(3) + cubeFunc(2);
console.log(sum);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const nettoFunc = num => {
    num = num * 0.87;
    return num;
}

let num = null;
do {
    num = Number(prompt('Введите сумму своей З/П'));
    if (isNaN(num)) {
        alert('Значение задано неверно');
    }
} while (isNaN(num))

console.log(`Размер заработной платы за вычетом налогов равен ${nettoFunc(num)}`);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const enterFunc = function () {
    let num = null;
    do {
        num = Number(prompt('Введите число'));
        if (isNaN(num)) {
            alert('Значение задано неверно');
        }
    } while (isNaN(num))
    return num;
}

const maxFunc = function (num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}

const num1 = enterFunc();
const num2 = enterFunc();
const num3 = enterFunc();

const rez = maxFunc(num1, num2, num3);
console.log(`Максимальное число ${rez}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, 
//     ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, 
//     либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sumFunc = function (a, b) {
    const rez = a + b;
    return rez;
}

const subFunc = function (a, b) {
    let rez = null;
    if (a > b) {
        rez = a - b;
    } else {
        rez = b - a;
    }
    return rez;
}

const multFunc = function (a, b) {
    const rez = a * b;
    return rez;
}

const divFunc = function (a, b) {
    const rez = a / b;
    return rez;
}

console.log(`Сложение ${sumFunc(3, 7)}`);
console.log(`Разность ${subFunc(3, 7)}`);
console.log(`Умножение ${multFunc(3, 7)}`);
console.log(`Деление ${divFunc(10, 5)}`);