// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

document.addEventListener("DOMContentLoaded", function () {

    const brEl1 = document.createElement('br');
    const brEl2 = document.createElement('br');
    const brEl3 = document.createElement('br');

    const buttonEl = document.createElement('button');
    buttonEl.innerHTML = 'Кнопка';
    const divContainer = document.querySelector('div.container');
    divContainer.appendChild(buttonEl);
    console.log('Страница загрузилась');
    buttonEl.onclick = () => { console.log('Событие onclick') };
    buttonEl.addEventListener('click', () => {
        console.log('Cобытие addEventListener');
    });

    divContainer.appendChild(brEl1);

    const buttonEl1 = document.createElement('button');
    buttonEl1.innerHTML = 'Кнопка_1';
    const buttonEl2 = document.createElement('button');
    buttonEl2.innerHTML = 'Кнопка_2';
    const buttonEl3 = document.createElement('button');
    buttonEl3.innerHTML = 'Кнопка_3';
    divContainer.appendChild(buttonEl1);
    divContainer.appendChild(buttonEl2);
    divContainer.appendChild(buttonEl3);

    const clickFunc = function (e) {
        console.log(e.target.innerHTML);
    };

    buttonEl1.addEventListener('click', clickFunc);
    buttonEl2.addEventListener('click', clickFunc);
    buttonEl3.addEventListener('click', clickFunc);

    const buttonEl4 = document.createElement('button');
    buttonEl4.innerHTML = 'Кнопка_4';
    divContainer.appendChild(buttonEl4);

    let counter = 0;

    buttonEl4.addEventListener('click', () => {
        counter++;
        console.log(`${buttonEl4.innerHTML} ${counter} раз`);
    });

    const buttonEl5 = document.createElement('button');
    buttonEl5.innerHTML = 'Кнопка_5';
    divContainer.appendChild(buttonEl5);

    buttonEl5.addEventListener('click', function (e) {
        e.target.innerHTML = 'Вы нажали на эту кнопку';
    });

    divContainer.appendChild(brEl2);

    const buttonElH1 = document.createElement('button');
    buttonElH1.innerHTML = 'Кнопка_h1';
    divContainer.appendChild(buttonElH1);

    buttonElH1.addEventListener('click', function (e) {
        const h1El = document.createElement('h1');
        h1El.innerHTML = 'Новый заголовок';
        buttonElH1.after(h1El);
    });

    const buttonElH1remove = document.createElement('button');
    buttonElH1remove.innerHTML = 'Кнопка_h1_удалить';
    divContainer.insertAdjacentElement('beforeend', buttonElH1remove);

    buttonElH1remove.addEventListener('click', function (e) {
        const h1Elremove = document.querySelectorAll('div h1');

        if (h1Elremove.length > 0) {
            h1Elremove[h1Elremove.length - 1].remove();
        }
    });

    const buttonHover = document.createElement('button');
    buttonHover.innerHTML = 'Кнопка_Наведение';
    divContainer.appendChild(buttonHover);

    buttonHover.addEventListener('mouseover', function (e) {
        console.log('Вы навели на данную кнопку');
    });

    buttonHover.addEventListener('mouseout', function (e) {
        console.log('Наведения на кнопку больше нет');
    });

    divContainer.appendChild(brEl3);

    const divUl = document.querySelector('div.ul');
    const buttonAddEl = document.createElement('button');
    buttonAddEl.innerHTML = 'Добавить элемент';
    divUl.appendChild(buttonAddEl);
    const ulEl = divUl.querySelector('ul');
    let count = 0;

    buttonAddEl.addEventListener('click', function (e) {
        const liEl = document.createElement('li');
        count++;
        liEl.innerHTML = 'Новый элемент списка ' + count;
        ulEl.appendChild(liEl);
        liEl.addEventListener('click', function (e) {
            e.target.remove();
        });
    });

    const buttonDelEl = document.createElement('button');
    buttonDelEl.innerHTML = 'Удалить первый элемент';
    divUl.appendChild(buttonDelEl);

    buttonDelEl.addEventListener('click', function (e) {
        const liList = ulEl.querySelectorAll('li');
        if (liList.length > 0) {
            liList[0].remove();
        }
    });

    const buttonClass = document.createElement('button');
    buttonClass.innerHTML = 'Добавляем класс';
    divUl.appendChild(buttonClass);
    buttonClass.addEventListener('click', function (e) {
        e.target.classList.add('click');
    });
});

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”