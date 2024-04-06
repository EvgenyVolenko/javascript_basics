// Необходимо получить список всех пользователей с помощью бесплатного API
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Данные при получении необходимо сохранить
// в локальное хранилище браузера localStorage. ДОПОЛНИТЕЛЬНАЯ НЕОБЯЗАТЕЛЬНАЯ ЧАСТЬ - Пользователь должен иметь возможность
// удалить любого пользователя из списка. При удалении пользователь должен удаляться не только со страницы,
// но и из локального хранилища localStorage

const url = 'https://jsonplaceholder.typicode.com/users';
const getDataUsers = async (source) => {
    try {
        const result = await fetch(source);
        const dataUsers = await result.json();
        return dataUsers;
    } catch (error) {
        console.log(error.message);
    }
}

const usersList = await getDataUsers(url);
let localDataUsers = localStorage.setItem('usersData', JSON.stringify(usersList));

const list = document.querySelector('.list');

usersList.forEach(element => {
    const user = document.createElement('li');
    user.classList.add('item');
    user.textContent = element.name;
    user.addEventListener('click', function (e) {
        e.target.remove();
        for (let i = 0; i < usersList.length; i++) {
            if (usersList[i].name === e.target.textContent) {
                usersList.splice(i, 1);
                localDataUsers = localStorage.setItem('usersData', JSON.stringify(usersList));
            }
            if (usersList.length === 0) {
                const text = document.querySelector('p');
                text.textContent = 'Список пользователей пуст!';
            }
        }
    });
    list.appendChild(user);
});

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

