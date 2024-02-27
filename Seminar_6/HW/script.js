// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// 5. Выведите содержимое тега title в консоль.
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// 7. Создайте тегp, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// 8. Удалите тег h6 на странице.

const superLink = document.getElementById('super_link');
console.log(superLink);

const cardLink = document.querySelectorAll('a.card-link');
cardLink.forEach(element => {
    element.textContent = 'ссылка';
});

console.log('');

const cardBody = document.querySelector('div.card-body');
const cardLinkBody = cardBody.querySelectorAll('a.card-link').forEach(element => {
    console.log(element);
});

const dataNumber = document.querySelector('[data-number="50"]');
console.log(dataNumber);

const title = document.querySelector('title');
console.log(title.textContent);

const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);

const text = document.createElement('p');
text.textContent = 'Привет';
const card = document.querySelector('.card');
card.insertBefore(text, card.firstElementChild);

const h6 = document.querySelector('h6');
h6.remove();