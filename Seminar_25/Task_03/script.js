// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать
// соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
// "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
// должна использовать try и catch для проверки вводимого значения.


const block = document.querySelector('.block');
const input = document.querySelector('.input');
const button = document.querySelector('.button');

console.log(block, button, input);

button.addEventListener('click', function () {
    try {
        const inputEl = input.value;
        if (isNaN(inputEl) || inputEl === '') {
            throw new Error("Вы ввели не число!");
        }
        block.textContent = 'Вы ввели число';
    } catch (error) {
        block.textContent = error.message;
    }
});