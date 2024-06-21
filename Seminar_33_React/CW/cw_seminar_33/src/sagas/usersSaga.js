// Задание 2 (45 минут)
// В ÿтом примере мý создадим базовое приложение, исполþзуā Redux Saga
// длā вýполнениā асинхронного запроса даннýх.
// ● npm install redux-saga
// ● Создайте файл саги. Например, src/sagas/usersSaga.js
// function fetchUsersApi() {
//  return fetch('https://jsonplaceholder.typicode.com/users')
//  .then(response => response.json());
// }
// ● Рабочаā сага: должна вýполнāтþсā, когда сага перехватит
// действие `FETCH_USERS_REQUEST`
// ● Настройте Redux Saga middleware. В файле, где вý создаете ваш
// store
// ● Теперþ, когда сага подклĀчена к вашему приложениĀ, вý
// можете инициироватþ загрузку полþзователей, отправив
// действие FETCH_USERS_REQUEST

import { put, takeEvery, call } from 'redux-saga/effects';

async function fetchUsersApi() {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

function* fetchUsers() {
    try {
        const users = yield call(fetchUsersApi);
        yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
    } catch (error) {
        yield put({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
}

function* usersSaga() {
    yield takeEvery('FETCH_USERS_REQUEST', fetchUsers);
}

export default usersSaga;
