// 1. Создание медиа плеера
// 2. Создать файл index.html
// 3. Создать папку img в которую загрузить изображение
// кнопок play, pause
// 4. Скачать произвольное видео из интернета
// 5. Добавить Тег видео в html
// 6. Продумать внешний вид progress и volume
// 7. Продумать время проигрывателя
// 8. Реализовать функционал своего собственного видеоплеера

// мини тайминги
// 1. Скачать все картинки (найти макет по желанию)
// 2. Добавляете html добавляете все элементы для
// управления видео
// 3. Реализуем кнопки play, pause
// 4. время и ползунки
// 5. Собираем внешний вид

const container = document.querySelector('div.container');

const videoEl = document.createElement('video');
videoEl.src = 'img/video.mp4';
videoEl.style.width = '360px';
container.appendChild(videoEl);

const uiDiv = document.createElement('div');
uiDiv.classList.add('ui');
container.appendChild(uiDiv);

const progressEl = document.createElement('input');
progressEl.type = 'range';
progressEl.classList.add('progress');
progressEl.style.width = '360px';
progressEl.min = 0;
progressEl.max = 100;
progressEl.value = 0;
uiDiv.appendChild(progressEl);

const timeEl = document.createElement('p');
timeEl.innerHTML = '0';
uiDiv.appendChild(timeEl);

const brEl = document.createElement('br');
uiDiv.appendChild(brEl);

const playEl = document.createElement('i');
playEl.classList.add('fas');
playEl.classList.add('fa-play');
uiDiv.appendChild(playEl);

const pauseEl = document.createElement('i');
pauseEl.classList.add('fas');
pauseEl.classList.add('fa-pause');
uiDiv.appendChild(pauseEl);

const volumeEl = document.createElement('input');
volumeEl.classList.add('volume');
volumeEl.type = 'range';
volumeEl.min = 0;
volumeEl.max = 10;
volumeEl.value = 10;
uiDiv.appendChild(volumeEl);


volumeEl.addEventListener('change', (e) => {
    videoEl.volume = e.target.value / 10;
});

playEl.addEventListener('click', (e) => {
    videoEl.play();
});

pauseEl.addEventListener('click', (e) => {
    videoEl.pause();
});

progressEl.addEventListener('change', (e) => {
    videoEl.currentTime = videoEl.duration * (e.target.value / 100);
});

videoEl.addEventListener('timeupdate', function (e) {
    timeEl.innerText = videoEl.currentTime;
    progressEl.value = Math.round(videoEl.currentTime / videoEl.duration * 100);
});