// Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
// (например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
// быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
// комплект мебели.
// 1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
// 2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
// 3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
// сохраняется в localStorage.
// 4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
// отображать ранее созданный комплект.
// 5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
// кнопку.
// 6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
// 7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
// предыдущие настройки удалены.

document.addEventListener('DOMContentLoaded', () => {
    const loadSettings = () => {
        const savedSettings = localStorage.getItem('furnitureSet');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            document.querySelector('#table').value = settings.table;
            document.querySelector('#chair').value = settings.chair;
            document.querySelector('#sofa').value = settings.sofa;
            document.querySelector('#result').textContent = `Вы сохранили: стол - ${settings.table}, стул - ${settings.chair}, диван - ${settings.sofa}.`;
        }
    };

    loadSettings();

    document.querySelector('#save').addEventListener('click', () => {
        const furnitureSet = {
            table: document.querySelector('#table').value,
            chair: document.querySelector('#chair').value,
            sofa: document.querySelector('#sofa').value
        };
        localStorage.setItem('furnitureSet', JSON.stringify(furnitureSet));
        alert('Комплект сохранен');
        document.querySelector('#result').textContent = `Вы сохранили: стол - ${furnitureSet.table}, стул - ${furnitureSet.chair}, диван - ${furnitureSet.sofa}.`;
    });

    document.querySelector('#load').addEventListener('click', () => {
        loadSettings();
    });

    document.querySelector('#clear').addEventListener('click', () => {
        localStorage.removeItem('furnitureSet');
        alert('Настройки очищены');
        document.querySelector('#table').selectIndex = 0;
        document.querySelector('#chair').selectIndex = 0;
        document.querySelector('#sofa').selectIndex = 0;
    });
});