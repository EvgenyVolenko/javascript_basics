// Задание 3 (тайминг 10 минут)
// У вас есть кнопка "Купить". Создайте скрипт, который при клике на эту кнопку меняет её текст на "Товар
// добавлен в корзину" в течение 2 секунд, а затем возвращает исходный текст "Купить". В обработчике
// события клика также проверьте, является ли событие доверенным. Если событие является доверенным,
// выполните изменение текста кнопки и убедитесь, что после 2 секунд текст возвращается в исходное
// состояние.


const buyButton = document.getElementById('buyButton');

buyButton.addEventListener('click', function (e) {
    if (e.isTrusted) {
        const originalText = buyButton.textContent;
        buyButton.textContent = 'Товар добавлен в корзину';

        setTimeout(() => {
            buyButton.textContent = originalText;
        }, 2000);
    }
});