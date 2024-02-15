// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arr1 = [];
let sum = 0;
let min = 10;
let have3 = false;
for (let i = 0; i < 5; i++) {
    arr1[i] = Math.floor(Math.random() * 10);
    sum += arr1[i];
    if (min > arr1[i]) {
        min = arr1[i];
    }
    if (arr1[i] === 3) {
        have3 = true;
    }
}
console.log(`Массив ${arr1} \nСумма элементов массива ${sum} \nМинимальное значение в массиве ${min} \nНаличие числа 3 в массиве ${have3}`);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i < 20; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += 'x';
    }
    console.log(str);
}