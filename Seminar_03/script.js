// Задание 1 (тайминг 20 минут) Текст задания
// 1. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку
// "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
// 2. Создайте функцию которая возводит переданное число в квадрат
// 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.
// В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// function greeting(firstName, lastName, age) {
//     return `Привет ${firstName} ${lastName} с возрастом ${age}`;
// }

// const firstName = prompt('Введите свое имя');
// const lastName = prompt('Введите свою фамилию');
// const age = Number(prompt('Введите свой возраст'));

// console.log(greeting(firstName, lastName, age));

// const mult = digit => digit * digit;
// console.log(mult(3));


// const check = digit => console.log(digit < 0 ? '---' : '+++');

// const check = digit => {
//     const res = digit < 0 ? '---' : '+++';
//     console.log(res);
// }
// const check = function (digit) {
//     if (digit < 0) {
//         console.log('---');
//     } else {
//         console.log('+++');
//     }
// }

// check(5);
// check(-5);
// check(0);

// Задание 2 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
// 2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = 1; let param2 = 2; let param3 = 3; 1.
// Дана фукнция function func(num = 5) { console.log(num * num); }
// Расскажите, каким будет результат каждого из вызовов функции. func(2); func(3); func();

// const funcSum = function (num1, num2, num3) {
//     const sum = num1 + num2 + num3;
//     return sum;
// }

// console.log(funcSum(1, 2, 3));

// let param1 = 4;
// let param2 = 5;
// let param3 = 6;

// console.log(funcSum(param1, param2, param3));

// Задание 3(тайминг 15 минут)
// 1. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их в консоль.
// 2. Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции

// const sqrtFunc = digit => Math.sqrt(digit);

// const num1 = sqrtFunc(3);
// const num2 = sqrtFunc(4);

// const sum = num1 + num2;

// console.log(sum);

// const res = function (num1, num2) {
//     if (num1 > num2) {
//         console.log(num2);
//     } else if (num2 > num1) {
//         console.log(num1);
//     } else {
//         console.log('Числа равны');
//     }
// }

// res(100, 1000);

// Задание 4 (тайминг 25 минут) 
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. 
// 2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

// const dayWeek = num => {
//     if (num === 1) {
//         return 'Понедельник';
//     } else if (num == 2) {
//         return 'Вторник';
//     } else if (num == 3) {
//         return 'Среда';
//     } else if (num == 4) {
//         return 'Четверг';
//     } else if (num == 5) {
//         return 'Пятница';
//     } else if (num == 6) {
//         return 'Суббота';
//     } else if (num == 7) {
//         return 'Воскресенье';
//     } else {
//         return 'Не то';
//     }
// }

// const dayWeekSwitch = num => {
//     let result = null;
//     switch (num) {
//         case 1:
//             result = 'Понедельник';
//             break;
//         case 2:
//             result = 'Вторник';
//             break;
//         case 3:
//             result = 'Среда';
//             break;
//         case 4:
//             result = 'Четверг';
//             break;
//         case 5:
//             result = 'Пятница';
//             break;
//         case 6:
//             result = 'Суббота';
//             break;
//         case 7:
//             result = 'Воскресенье';
//             break;

//         default:
//             result = 'Не то';
//             break;
//     }
//     return result;
// }

// let day = dayWeek('7');
// console.log(day);

// day = dayWeekSwitch(5);
// console.log(day);

const timeFunc = firstName => {
    let time = new Date().getHours();
    let result = null;
    if (time < 10 && time > 6) {
        result = `Доброе утро ${firstName}`;
    } else if (time < 17 && time > 9) {
        result = `Добрый день ${firstName}`;
    } else if (time < 22 && time > 16) {
        result = `Добрый вечер ${firstName}`;
    } else {
        result = `Доброй ночи ${firstName}`;
    }
    return result;
}

console.log(timeFunc('Женя'));
