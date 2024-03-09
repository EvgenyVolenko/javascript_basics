// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const checkboxButton = document.querySelector('div.checkbox-button');
const checkboxEl1 = checkboxButton.querySelector('input.checkbox');
const buttonEl1 = document.createElement('button');
buttonEl1.textContent = 'Отправить';
checkboxButton.appendChild(buttonEl1);

buttonEl1.addEventListener('click', () => {
    if (!checkboxEl1.checked) {
        const textAssent = document.createElement('p');
        textAssent.textContent = 'Необходимо согласиться с условиями';
        checkboxButton.appendChild(textAssent);
    }
});

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

const container = document.querySelector('div.container');
const buttonEl = document.createElement('button');
buttonEl.innerHTML = "Отправить";

const radioElOne = document.createElement('input');
radioElOne.type = 'radio';
radioElOne.id = 'radio_1';
radioElOne.name = 'drink';
const labelElOne = document.createElement('label');
labelElOne.innerHTML = 'Чай';
labelElOne.for = 'tea';
const radioElTwo = document.createElement('input');
radioElTwo.type = 'radio';
radioElTwo.id = 'radio_2';
radioElTwo.name = 'drink';
const labelElTwo = document.createElement('label');
labelElTwo.innerHTML = 'Кофе';
labelElTwo.for = 'coffee';
container.appendChild(radioElOne);
container.appendChild(labelElOne);
container.appendChild(radioElTwo);
container.appendChild(labelElTwo);
container.appendChild(buttonEl);
buttonEl.addEventListener('click', function (e) {
    const textEl = document.createElement('p');
    if (radioElOne.checked) {
        textEl.innerHTML = 'Чай закончился';
        container.appendChild(textEl);
    } else if (radioElTwo.checked) {
        textEl.innerHTML = 'Кофе закончился';
        container.appendChild(textEl);
    }
});

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const containerP = document.querySelector('div.containerP');
const inputEl = document.createElement('input');
inputEl.type = 'text';
const buttonEl2 = document.createElement('button');
buttonEl2.innerHTML = "Отправить";
containerP.appendChild(inputEl);
containerP.appendChild(buttonEl2);
buttonEl2.addEventListener('click', function (e) {
    if (inputEl.value.toLocaleLowerCase() === 'password') {
        inputEl.classList.remove('red-border');
        inputEl.classList.add('green-border');
    } else {
        inputEl.classList.remove('green-border');
        inputEl.classList.add('red-border');
    }
});

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const containerH1 = document.querySelector('div.containerH1');
const inputEl3 = document.createElement('input');
inputEl3.type = 'text';
containerH1.appendChild(inputEl3);
const titleEl = document.createElement('h1');
titleEl.innerHTML = 'Title';
containerH1.appendChild(titleEl);
inputEl3.addEventListener('change', function (e) {
    titleEl.innerHTML = e.target.value;
});