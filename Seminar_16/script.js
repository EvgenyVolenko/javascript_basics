// 1. Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay
// (число). Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками. Например:
// a. delayedMessage("Сообщение 1", 2000)
// b. delayedMessage("Сообщение 2", 1000)
// c. delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().

const myPromise = new Promise((resolve, reject) => { });

console.log(myPromise);
myPromise.then(res => res.json()).then(data => console.log(data)).catch(error => console.error(error));

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.log('Что-то пошло не так'));

// -------------------------------------------------------

const getData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

const fetchData = await getData();
console.log(fetchData);

// --------------------------------------------------------
console.log('');

const getDataNasa = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

const result = await getDataNasa(url);
console.log(result);

result.forEach(element => {
    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `<figure>
    <img src="${element.url}" alt="${element.title}" />
    <figcaption>${element.explanation}</figcaption>
    </figure>`);
});

// ---------------------------------------------------------

const localData = localStorage.setItem('myData', 'Some data');
const localDataGet = localStorage.getItem('myData');

console.log(localDataGet);
console.log(localStorage.key(0));
localStorage.removeItem('myData');
console.log(localStorage.getItem('myData'));
// localStorage.clear();

localStorage.user = {
    name: 'Женя'
}

console.log(localStorage.user);

localStorage.user = JSON.stringify({
    name: 'Женя'
});

console.log(localStorage.user);

//------------------------------------------------------------

const inputElement = document.querySelector('#task_input');
const ulEl = document.querySelector('ul');

const savedTask = JSON.parse(localStorage.getItem('tasks')) || [];

savedTask.forEach(task => {
    const liEl = document.createElement('li');
    liEl.textContent = task;
    ulEl.appendChild(liEl);
});

const addTask = () => {
    const text = inputElement.value;
    const liEl = document.createElement('li');
    liEl.textContent = text;
    if (text) {
        ulEl.appendChild(liEl);
        savedTask.push(text);
        localStorage.setItem('tasks', JSON.stringify(savedTask));
        inputElement.value = '';
    }
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    addTask();
});