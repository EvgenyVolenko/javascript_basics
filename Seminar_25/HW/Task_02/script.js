// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const productSelect = document.querySelector('.productSelect');

initialData.forEach(el => {
    const productSelectEl = document.createElement('option');
    productSelectEl.setAttribute("value", el.product);
    productSelectEl.textContent = el.product;
    productSelect.append(productSelectEl);
});

const feedbackList = document.querySelector('.feedbackList');

const displayFeedbacks = (productEl) => {
    feedbackList.innerHTML = '';

    initialData.forEach(el => {

        if (el.product === productEl) {
            el.reviews.forEach(reviewEl => {
                const reviewsItem = document.createElement('li');
                reviewsItem.textContent = reviewEl.text;
                feedbackList.append(reviewsItem);
            });
        }
    });
}

const countId = function (initialData) {
    let counter = 0;
    initialData.forEach(el => {
        el.reviews.forEach(reviewEl => {
            if (Number(reviewEl.id) > counter) {
                counter = Number(reviewEl.id);
            }
        });
    });
    return counter;
}

productSelect.addEventListener('change', function (e) {
    const selectedProduct = productSelect.value;
    displayFeedbacks(selectedProduct);
});

const findProductByName = function (data, name) {
    let res = null;

    data.forEach(el => {
        if (el.product === name) {
            res = el;
        }
    });
    return res;
}

const input = document.querySelector('.input');
const button = document.querySelector('.button');

button.addEventListener('click', function () {
    try {
        let inputEl = input.value;
        if (inputEl.length < 50 || inputEl.length > 500) {
            throw new Error('Отзыв должен быть не менее 50 символов и не более 500!');
        } else if (productSelect.value === '') {
            throw new Error('Вы не выбрали товар для отзыва!');
        }
        const idNumber = countId(initialData) + 1;
        let productEl = findProductByName(initialData, productSelect.value);
        productEl.reviews.push({ id: idNumber.toString(), text: inputEl });
        displayFeedbacks(productSelect.value);
        input.value = '';
    } catch (error) {
        alert(error.message);
    }
});