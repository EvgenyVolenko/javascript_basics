// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
    { title: "Супермен", artist: "Найк Борзов", year: "2000" },
    { title: "Best 20-20", artist: "Мумий Тролль", year: "2020" },
    { title: "Гранатовый альбом", artist: "Сплин", year: "1998" }
];

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: musicCollection[this.current++] }
                : { done: true };
        }
    }
}

for (const album of musicCollection) {
    console.log(`"${album.title}" - ${album.artist} (${album.year})`);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента.В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
//     Ольга - специализация: Суши.
//         Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
//     Пицца "Пепперони" - повар: Виктор.
//         Суши "Филадельфия" - повар: Ольга.
//             Суши "Калифорния" - повар: Ольга.
//                 Тирамису - повар: Дмитрий.
//                     Чизкейк - повар: Дмитрий.

//                         Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const cookSpecialization = new Map();

cookSpecialization.set("Пицца", "Виктор");
cookSpecialization.set("Суши", "Ольга");
cookSpecialization.set("Десерты", "Дмитрий");

const dishs = new Map();

dishs.set('Пицца "Маргарита"', cookSpecialization.get('Пицца'))
    .set('Пицца "Пепперони"', cookSpecialization.get('Пицца'))
    .set('Суши "Филадельфия"', cookSpecialization.get('Суши'))
    .set('Суши "Калифорния"', cookSpecialization.get('Суши'))
    .set('Тирамису', cookSpecialization.get('Десерты'))
    .set('Чизкейк', cookSpecialization.get('Десерты'));

const orders = new Map();

orders.set({ name: 'Алексей' }, ['Пицца "Пепперони"', 'Тирамису']);
orders.set({ name: 'Мария' }, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
orders.set({ name: 'Ирина' }, ['Чизкейк']);

orders.forEach((value, key) => {
    console.log(`Клиент ${key.name} заказал - ${dishCookToString(value)}`);
});

function dishCookToString(order) {
    let string = '';

    if (order && order.length > 0) {
        order.forEach(el => {
            string += `${el}, повар ${dishs.get(el)}. `;
        });
        return string;
    } else {
        return 'В заказе пусто!';
    }
}