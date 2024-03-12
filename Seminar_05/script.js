
// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname

const days = {
    "1": "Понедельник",
    "2": "Вторник",
    "3": "Среда",
    "4": "Четверг",
    "5": "Пятница",
    "6": "Суббота",
    "7": "Воскресенье"
}

console.log(days);
console.log(days['2']);

let user = {
    "name": "Василий",
    'surname': "Иванов",
    'age': '35'
}

console.log(`${user.surname} - ${user.name} - ${user.age}`);

// user.patronymic = prompt();
console.log(user);
delete user.surname;
console.log(user);

// Задание 2 (тайминг 25 минут)
// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.
// 1. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
let week = {};

for (let i = 0; i < arr1.length; i++) {
    week[arr1[i]] = arr2[i];
}
console.log(week);

const obj = { x: 1, y: 2, z: 3 };
for (const key in obj) {
    obj[key] = obj[key] ** 2;
}
console.log(obj);

for (let [key, value] of Object.entries(obj)) {
    obj[key] = value ** 2;
}
console.log(obj);

for (let key of Object.keys(obj)) {
    obj[key] = obj[key] ** 2;
}
console.log(obj);

// Задание 3 (тайминг 15 минут)
// const obj = {
// key1: {
// key1: 1,
// key2: 2,
// key3: 3,
// },
// key2: {
// key1: 4,
// key2: 5,
// key3: 6,
// },
// key3: {
// key1: 7,
// key2: 8,
// key3: 9,
// },
// }
// Найдите сумму элементов приведенного объекта.

const obj1 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

let sum = null;

for (let [key, value] of Object.entries(obj1)) {
    for (const key1 in value) {
        sum += value[key1];
    }
}

console.log(sum);

// Задание 4 (тайминг 30 минут)
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

let riddles = {
    question: 'Как меня зовут?',
    answer: 'Вася',
    tries: 0,
    askQuestion: function (str = '') {
        let possibleAnswer = prompt(str + ' ' + this.question);
        if (possibleAnswer === this.answer) {
            alert('Правильно');
        } else {
            alert('Не правильно');
            this.tries++;
            if (this.tries <= 3) {
                this.askQuestion('Попробуй еще раз');
            }
        }
    }
};

riddles.askQuestion();