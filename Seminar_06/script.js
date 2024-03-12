// {/* <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p> */}
// {/* <p class="www">text 2</p> */}

const block = document.getElementById('block');
console.log(block);

const first = document.querySelector('div#block > p');
console.log(first.innerHTML);

const www = document.querySelector('div#block > p.www');
console.log(www.innerHTML);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const link = document.querySelector('div#block > a.link');
link.innerHTML = 'link text js';
link.href = 'https://developer.mozilla.org/ru/';
console.log(link);

// document.querySelector('img.photo').src = 'https://fikiwiki.com/uploads/posts/2022-02/1644865303_51-fikiwiki-com-p-skachat-kartinki-khoroshego-kachestva-59.jpg';

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 

const content = document.querySelector('div.content');
const text = document.createElement('p');
text.textContent = 'Новый текстовый элемент';
content.appendChild(text);
console.log(content.innerHTML);
text.remove();

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const button = document.createElement('button');
button.textContent = 'Счетчик кликов';
content.appendChild(button);
let counter = 0;
button.addEventListener('click', (e) => {
    counter++;
    console.log(counter);
    e.target.textContent = 'Текст отправлен';
});

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
