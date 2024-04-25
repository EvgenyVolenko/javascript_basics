const data = JSON.parse(dataBase);
const shedules = document.querySelector('div.shedules__box');

data.forEach(element => {

    const item = document.createElement('div');
    const nameShedule = document.createElement('h2');
    const time = document.createElement('div');
    const timeStart = document.createElement('p');
    const timeEnd = document.createElement('p');
    const places = document.createElement('div');
    const placesTotal = document.createElement('p');
    const placesOccupied = document.createElement('p');

    nameShedule.textContent = element.nameShedule;
    timeStart.textContent = 'Время начала: ' + element.timeStart;
    timeEnd.textContent = 'Время завершения: ' + element.timeEnd;
    placesTotal.textContent = 'Количество мест: ' + element.placesTotal;
    placesOccupied.textContent = 'Мест занято: ' + element.placesOccupied;

    item.classList.add('pt-4');

    const buttonSignUp = document.createElement('button');
    buttonSignUp.textContent = 'Записаться';
    buttonSignUp.classList.add('btn', 'btn-warning');

    const buttonСancel = document.createElement('button');
    buttonСancel.textContent = 'Отменить запись';
    buttonСancel.classList.add('btn', 'btn-danger');

    time.append(timeStart);
    time.append(timeEnd);
    places.appendChild(placesTotal);
    places.appendChild(placesOccupied);
    item.appendChild(nameShedule);
    item.appendChild(time);
    item.appendChild(places);
    item.appendChild(buttonSignUp);
    item.appendChild(buttonСancel);
        
    shedules.appendChild(item);
});