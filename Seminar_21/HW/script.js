const data = JSON.parse(dataBase);
const shedules = document.querySelector('div.shedules__box');

data.forEach(el => {
    const item = createShedule(el.nameShedule, el.timeStart, el.timeEnd, el.placesTotal, el.placesOccupied);
    shedules.appendChild(item);
});

shedules.addEventListener('click', function (e) {

    const itemShedule = e.target.closest('.shedule__item');
    const placesTotal = itemShedule.querySelector('.places_total > span');
    const placesOccupied = itemShedule.querySelector('.places_occupied > span');
    const buttonSignUp = itemShedule.querySelector('.button_SignUp');

    if (e.target.textContent == 'Записаться') {
        placesOccupied.textContent = Number(placesOccupied.textContent) + 1;
        buttonSignUp.classList.remove('btn-primary');
        buttonSignUp.classList.add('btn-success', 'disabled');
        buttonSignUp.textContent = 'Вы записаны';
        checkButtonSignUP(Number(placesOccupied.textContent), Number(placesTotal.textContent), buttonSignUp);
    }
    if (e.target.textContent == 'Отменить запись' && buttonSignUp.textContent == 'Вы записаны') {
        placesOccupied.textContent = Number(placesOccupied.textContent) - 1;
        buttonSignUp.textContent = 'Записаться';
        buttonSignUp.classList.remove('btn-success', 'disabled');
        buttonSignUp.classList.add('btn-primary');
    }
});

function createShedule(nameShedule, timeStart, timeEnd, placesTotal, placesOccupied) {

    const item = document.createElement('div');
    const nameSheduleEl = document.createElement('h2');
    const time = document.createElement('div');
    const timeStartEl = document.createElement('p');
    const timeEndEl = document.createElement('p');
    const places = document.createElement('div');
    const placesTotalEl = document.createElement('p');
    const placesOccupiedEl = document.createElement('p');
    const buttons = document.createElement('div');
    const buttonSignUp = document.createElement('button');
    const buttonСancel = document.createElement('button');

    nameSheduleEl.textContent = nameShedule;
    timeStartEl.textContent = 'Время начала: ' + timeStart;
    timeEndEl.textContent = 'Время завершения: ' + timeEnd;
    placesTotalEl.innerHTML = 'Количество мест: ' + '<span>' + placesTotal + '</span>';
    placesOccupiedEl.innerHTML = 'Мест занято: ' + '<span>' + placesOccupied + '</span>';
    buttonSignUp.textContent = 'Записаться';
    buttonСancel.textContent = 'Отменить запись';

    item.classList.add('shedule__item', 'pt-4');
    placesTotalEl.classList.add('places_total');
    placesOccupiedEl.classList.add('places_occupied');
    buttons.classList.add('d-flex', 'gap-5', 'buttons');
    checkButtonSignUP(placesOccupied, placesTotal, buttonSignUp);
    buttonСancel.classList.add('button_cancel', 'btn', 'btn-danger');

    time.append(timeStartEl);
    time.append(timeEndEl);
    places.appendChild(placesTotalEl);
    places.appendChild(placesOccupiedEl);
    buttons.append(buttonSignUp);
    buttons.append(buttonСancel);
    item.appendChild(nameSheduleEl);
    item.appendChild(time);
    item.appendChild(places);
    item.appendChild(buttons);

    return item;
}

function checkButtonSignUP(placesOccupied, placesTotal, button) {
    if (!button.classList.contains('btn-success')) {
        if (placesOccupied < placesTotal) {
            button.classList.remove('btn-outline-secondary', 'disabled');
            button.classList.add('button_SignUp', 'btn', 'btn-primary');
        } else {
            button.classList.remove('btn-primary');
            button.classList.add('button_SignUp', 'btn', 'btn-outline-secondary', 'disabled');
        }
    }
}