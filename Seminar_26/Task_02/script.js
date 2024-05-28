// Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
// а затем загружать или удалять сохраненные данные.
// Разработка Интерфейса:
// Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
// сообщение отображается на странице.

document.querySelector('.load-button').addEventListener('click', () => {
    const savedText = localStorage.getItem('savedText');
    document.getElementById('saved-text').textContent = savedText ? savedText : 'Сохраненного текста нет!';
});

document.querySelector('.save-button').addEventListener('click', () => {
    const input = document.querySelector('.input-data').value;
    localStorage.setItem('savedText', input);
    alert('Текст сохранен!');
});

document.querySelector('.clear-button').addEventListener('click', () => {
    localStorage.removeItem('savedText');
    document.getElementById('saved-text').textContent = 'Данные очищены';
});