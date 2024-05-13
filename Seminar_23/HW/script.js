const keys = JSON.parse(allKeys);

const photoContainer = document.getElementById('photoContainer');

let YOUR_ACCESS_KEY = '';

keys.forEach(key => {
    if (Object.keys(key).includes('ACCESS_KEY')) {
        YOUR_ACCESS_KEY = Object.values(key)[0];
    }
});


let page = 1;

async function fetchPhotos() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=${YOUR_ACCESS_KEY}`);
        const photos = await response.json();
        return photos;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий: ', error);
        return [];
    }
}

async function loadMorePhotos() {
    const photos = await fetchPhotos();
    if (photos.length > 0) {
        photos.forEach(photo => {
            const photoElement = document.createElement('figure');
            photoElement.classList.add('photo');
            const img = document.createElement('img');
            img.src = photo.urls.small;
            img.alt = photo.alt_description;
            const phoyographer = document.createElement('figcaption');
            phoyographer.textContent = photo.user.name;
            photoElement.append(img);
            photoElement.append(phoyographer);
            photoContainer.append(photoElement);
        });
        page++;
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMorePhotos();
    }
});

loadMorePhotos();