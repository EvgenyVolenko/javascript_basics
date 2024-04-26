// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const urlDogs = 'https://dog.ceo/api/breeds/image/random';
const dogsImages = document.querySelector('.gallery');

const getDataDog = async (source) => {
    try {
        const result = await fetch(source);
        const dataDogs = await result.json();
        return dataDogs;
    } catch (error) {
        console.log(error.message);
    }
}

const getDog = async () => {
    const dog = await getDataDog(urlDogs);
    const img = document.createElement('img');
    const div = document.createElement('div');
    img.src = dog.message;
    div.classList.add('gallery__item');
    div.append(img);
    dogsImages.append(div);
    div.style.display = 'none';
}

for (let i = 0; i < 15; i++) {
    await getDog();
}

const images = document.querySelectorAll('.gallery__item');
const navPointBox = document.querySelector('.nav-point__box');

images[0].style.display = 'block';

let activeImageUrl = document.querySelector('[style*="display: block"]').querySelector('img').src;

images.forEach(el => {
    const navPointItem = document.createElement('a');
    navPointItem.classList.add('nav-point__item');
    navPointItem.src = el.querySelector('img').src;
    navPointBox.append(navPointItem);

    navPointItem.addEventListener('click', function (e) {
        e.preventDefault();
        images.forEach(item => {
            item.style.display = 'none';
            if (navPointItem.src === el.querySelector('img').src) {
                el.style.display = 'block';
                activeImageUrl = el.querySelector('img').src;
                navPoints.forEach(el => {
                    el.classList.remove('active');
                    e.target.classList.add('active');
                });
            }
        });
    });
});

const navPoints = navPointBox.querySelectorAll('.nav-point__item');
navPoints[0].classList.add('active');

const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector('.button-prev');

buttonNext.addEventListener('click', function (e) {
    let res = null;
    for (let i = 0; i < images.length; i++) {
        if (images[i].querySelector('img').src === activeImageUrl) {
            res = i + 1;
            images[i].style.display = 'none';
            navPoints[i].classList.remove('active');
        }
    }
    if (res === images.length) {
        res = 0;
    }
    images[res].style.display = 'block';
    navPoints[res].classList.add('active');
    activeImageUrl = images[res].querySelector('img').src;
});

buttonPrev.addEventListener('click', function (e) {
    let res = null;
    for (let i = 0; i < images.length; i++) {
        if (images[i].querySelector('img').src === activeImageUrl) {
            res = i - 1;
            images[i].style.display = 'none';
            navPoints[i].classList.remove('active');
        }
    }
    if (res < 0) {
        res = images.length - 1;
    }
    images[res].style.display = 'block';
    navPoints[res].classList.add('active');
    activeImageUrl = images[res].querySelector('img').src;
});