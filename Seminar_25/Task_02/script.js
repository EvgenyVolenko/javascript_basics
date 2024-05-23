// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
// наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.


class User {
    #name;
    #surename;

    constructor(name, sureName) {
        this.#name = name;
        this.#surename = sureName;
    }
}

class RegularUser extends User {

}

class PremiumUser extends User {
    premiumAccount = null;
    setPremium() {
        this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
    }
}


function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        return user?.premiumAccount ?? 'Данных нет';
    } else { return 'Это не премиум пользователь!'; }
}

const user1 = new RegularUser('Вася', 'Петров');
const user2 = new PremiumUser('Иван', 'Иванов');
user2.setPremium();
const user3 = new PremiumUser('Катя', 'Катина');

console.log(getAccountInfo(user1));
console.log(getAccountInfo(user2));
console.log(getAccountInfo(user3));