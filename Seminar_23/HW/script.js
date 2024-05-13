const keys = JSON.parse(allKeys);

const photoContainer = document.getElementById('photoContainer');
photoContainer.classList.add('center');

let YOUR_ACCESS_KEY = '';

keys.forEach(key => {
    if (Object.keys(key).includes('ACCESS_KEY')) {
        YOUR_ACCESS_KEY = Object.values(key)[0];
    }
});

let page = 1;

async function fetchPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${YOUR_ACCESS_KEY}`);
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий: ', error);
        return [];
    }
}

async function fetchLikes(id) {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/${id}/statistics?client_id=${YOUR_ACCESS_KEY}`);
        const statistics = await response.json();
        return statistics;
    } catch (error) {
        console.error('Ошибка при загрузке статистики: ', error);
        return [];
    }
}

async function loadPhoto() {

    let likeCounter = 0;

    const photo = await fetchPhoto();

    const photoElement = document.createElement('figure');
    photoElement.classList.add('photo');
    const img = document.createElement('img');
    img.src = photo.urls.small;
    img.alt = photo.alt_description;
    const figcaption = document.createElement('figcaption');
    figcaption.classList.add('figcaption');
    const phoyographer = document.createElement('div');
    phoyographer.textContent = 'Имя фотографа: ' + photo.user.name;
    const likeBtn = document.createElement('button');
    likeBtn.textContent = 'Вжарить лайк';
    const likeEl = document.createElement('div');
    const likeText = document.createElement('div');
    const likeCounterEl = document.createElement('div');
    likeEl.classList.add('likeCount');
    likeText.textContent = 'Лайков:';
    const statById = await fetchLikes(photo.id);

    if (localStorage.getItem('counter') !== null) {
        likeCounter = localStorage.getItem('counter');
    } else {
        likeCounter = statById.likes.total;
    }

    likeCounterEl.textContent = likeCounter;
    likeCounterEl.classList.add('digit');

    likeBtn.addEventListener('click', () => {
        likeCounter++;
        likeCounterEl.textContent = likeCounter;
        localStorage.setItem('counter', likeCounter);
    });

    likeEl.append(likeText);
    likeEl.append(likeCounterEl);
    photoElement.append(img);
    figcaption.append(phoyographer);
    figcaption.append(likeBtn);
    figcaption.append(likeEl);
    photoElement.append(figcaption);
    photoContainer.append(photoElement);
}

loadPhoto();