// Задание 2 (тайминг 15 минут)
// Создайте простое модальное окно, которое появляется при клике на кнопку "Открыть
// модальное окно" и закрывается при клике на кнопку "Закрыть". Модальное окно
// должно содержать заголовок "Модальное окно" и кнопку для закрытия.
// * Модальное окно должно плавно появляться и исчезать при открытии и закрытии.


const openButton = document.querySelector('#openModalBtn');
const closeButton = document.querySelector('#closeModalBtn');
const modal = document.querySelector('.modal');

openButton.addEventListener('click', function (e) {
    modal.style.display = 'block'
});

closeButton.addEventListener('click', function (e) {
    modal.style.display = 'none'
});