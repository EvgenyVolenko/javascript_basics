// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. 
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, 
// данный отзыв удаляется из LocalStorage).

const inputTitle = document.querySelector('.input-title');
const inputFeedback = document.querySelector('.input-feedback');
const addButton = document.querySelector('.add-button');
const productList = document.querySelector('.product-list');
const feedackList = document.querySelector('.feedack-list');

const fillFeedbacks = function (block, productFeedbacks) {
    block.innerHTML = '';
    productFeedbacks.forEach(feedbackItem => {
        const feedback = document.createElement('li');
        const deleteFeedbackBtn = document.createElement('button');
        deleteFeedbackBtn.textContent = 'Удалить отзыв';
        deleteFeedbackBtn.classList.add('delete-button');
        feedback.textContent = feedbackItem.text;
        block.append(feedback);
        block.append(deleteFeedbackBtn);
    });
}

startProductsData.forEach(product => {
    const productTitle = document.createElement('li');
    productTitle.textContent = product.title;
    productTitle.style.cursor = 'pointer';
    productTitle.addEventListener('click', () => {
        fillFeedbacks(feedackList, product.feedbacks);
    });
    productList.append(productTitle);
});


