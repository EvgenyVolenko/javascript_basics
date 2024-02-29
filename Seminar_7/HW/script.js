
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropDownItems = document.querySelectorAll('.dropdown-item');
dropDownItems.forEach(element => {
    element.setAttribute('class', element.classList + ' super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnEl = document.querySelector('.btn');

if (btnEl.classList.contains('btn-secondary')) {
    btnEl.classList.remove('btn-secondary');
} else {
    btnEl.classList.add('btn-secondary');
};

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuEl = document.querySelectorAll('.menu');
menuEl.forEach(element => {
    if (element.classList.contains('dropdown-menu')) {
        element.classList.remove('dropdown-menu');
    }
});

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divDropDown = document.querySelector('div.dropdown');
divDropDown.insertAdjacentHTML('afterend', '<a href="#">link</a>')

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dropdownMenuButton = document.getElementById('dropdownMenuButton');
dropdownMenuButton.id = 'superDropdown';

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const findByAttr = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
findByAttr.setAttribute('data-dd', '3');

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropdownToggle = document.querySelector('div .dropdown-toggle');
dropdownToggle.removeAttribute('type');