// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
// (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
// имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
// задержки — отображать новости на странице.
// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
// задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
// добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
// выполнение и ошибки с использованием then() и catch().
// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
// её снова после завершения операции (будь то успешная загрузка или ошибка).

const loadButton = document.querySelector('.load-button');
const newsContainer = document.querySelector('.news-container');

const mockDatabase = [
    { title: 'Новость 1', content: 'Содержание новости 1...' },
    { title: 'Новость 2', content: 'Содержание новости 2...' }
];

const fetchNews = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(mockDatabase);
            } else {
                reject('Ошибка загрузки данных');
            }
        }, 2000);
    });
}

loadButton.addEventListener('click', function (e) {
    fetchNews()
        .then(data => {
            data.forEach(el => {
                const newsTitle = document.createElement('h2');
                newsTitle.textContent = el.title;
                const newsContent = document.createElement('p');
                newsContent.textContent = el.content;
                newsContainer.append(newsTitle);
                newsContainer.append(newsContent);
            });
        }).catch((err) => {
            newsContainer.textContent = `Ошибка: ${err}`;
        });
});
