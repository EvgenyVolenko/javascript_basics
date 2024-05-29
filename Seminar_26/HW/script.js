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

const deleteFeedbackFunc = function (product, feedbackItem) {

    for (let i = 0; i < product.feedbacks.length; i++) {
        if (product.feedbacks[i].id === feedbackItem.id) {
            product.feedbacks.splice(i, 1);
        }
    }
}

const countId = function (productsD) {
    let counter = 0;
    productsD.forEach(el => {
        el.feedbacks.forEach(feedback => {
            if (feedback.id > counter) {
                counter = feedback.id;
            }
        });
    });
    return counter;
}

const fillFeedbacks = function (block, product) {
    block.innerHTML = '';
    product.feedbacks.forEach(feedbackItem => {
        const feedback = document.createElement('li');
        const deleteFeedbackBtn = document.createElement('button');
        deleteFeedbackBtn.textContent = 'Удалить отзыв';
        deleteFeedbackBtn.classList.add('delete-button');
        deleteFeedbackBtn.addEventListener('click', function () {
            deleteFeedbackFunc(product, feedbackItem);
            fillFeedbacks(block, product);
            localStorage.setItem('myData', JSON.stringify(productsData));
        });
        feedback.textContent = feedbackItem.text;
        block.append(feedback);
        block.append(deleteFeedbackBtn);
    });
}

const fillProducts = function (block, products, feedackList) {
    block.innerHTML = '';
    products.forEach(product => {
        const productTitle = document.createElement('li');
        productTitle.textContent = product.title;
        productTitle.style.cursor = 'pointer';
        productTitle.addEventListener('click', () => {
            fillFeedbacks(feedackList, product);
        });
        block.append(productTitle);
    });
}

const checkProduct = function (data, productTitle) {
    let findedProd = null;
    data.forEach(el => {
        if (el.title.toUpperCase() === productTitle.toUpperCase()) {
            findedProd = el;
        }
    });
    return findedProd;
}

let productsData = [];

if (!localStorage.getItem('myData')) {
    localStorage.setItem('myData', JSON.stringify(startProductsData));
    productsData = startProductsData;
} else {
    productsData = JSON.parse(localStorage.getItem('myData'));
}

fillProducts(productList, productsData, feedackList);

addButton.addEventListener('click', function () {
    const productTitle = inputTitle.value;
    const productFeedback = inputFeedback.value;

    if (!productTitle || !productFeedback) {
        alert('Вы ввели не все данные');
    } else {
        const newId = countId(productsData) + 1;
        const findedProduct = checkProduct(productsData, productTitle);

        if (findedProduct) {
            findedProduct.feedbacks.push({ id: newId, text: productFeedback });
            localStorage.setItem
            fillFeedbacks(feedackList, findedProduct);
        } else {
            const newFeedbacks = [{ id: newId, text: productFeedback }];
            productsData.push({ title: productTitle, feedbacks: newFeedbacks });
            fillProducts(productList, productsData, feedackList);
            fillFeedbacks(feedackList, { title: productTitle, feedbacks: newFeedbacks });
        }
        localStorage.setItem('myData', JSON.stringify(productsData));
    }
    inputTitle.value = '';
    inputFeedback.value = ''
});
