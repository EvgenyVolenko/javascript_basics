// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// let num1 = Number(prompt('Введите num1'));
// let num2 = Number(prompt('Введите num2'));

// if (!isNaN(num1) && !isNaN(num2)) {

//     if (num1 <= 1 && num2 >= 3) {
//         console.log('Условие выполнено');
//     } else {
//         console.log('Условие НЕ выполнено');
//     }

// } else {
//     console.log('Как минимум одно из введенных значений не число!!!');
// }

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
test === 0 ? console.log('+++') : console.log('---');

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 20;

if (day >= 1 && day < 11) {
    console.log('Первая декада');
} else if (day > 10 && day < 21) {
    console.log('Вторая декада');
} else {
    console.log('Третья декада');
}

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

let num = Number(prompt('Введите num'));

if (num > 999) {
    num = num % 1000;
}

let hundreds = parseInt(num / 100);
let dozens = parseInt(num % 100 / 10);
let units = num % 10;

console.log(`В введенном числе ${hundreds} сотен ${dozens} десятков ${units} единиц`);