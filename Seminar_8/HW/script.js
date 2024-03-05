// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.onload = function () {
    console.log('Cтраница загрузилась');
};

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const bodyEl = document.querySelector('body');
bodyEl.onclick = function (e) {
    const superElement = e.target.closest('.super_element');
    if (!superElement) {
        return;
    };
    const rezult = `Класс ${e.target.className} присутствует в элементе ${superElement.tagName.toLowerCase()}`;
    console.log(rezult);
};

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textArea = document.querySelector('textarea');
textArea.addEventListener('mouseover', () => {
    console.log('Вы навели на textarea.');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulList = document.querySelector('ul');
ulList.addEventListener('click', function (e) {
    const rez = e.target.closest('button');
    if (!rez) {
        return;
    };
    console.log(e.target.innerHTML);
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// В данном случае работает "всплытие" сначала срабатывает событие на элементе, а потом событие на родителе.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liList = ulList.querySelectorAll('li');
let liEl = null;
for (let i = 0; i < liList.length; i++) {
    if (i % 2) {
        liEl = liList[i];
        liEl.style.background = 'green';
    };
};