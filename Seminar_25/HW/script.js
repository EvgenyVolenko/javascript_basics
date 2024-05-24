// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.


class Library {
    #books = [];

    constructor(books) {
        try {
            if ((new Set(books)).size !== books.length) {
                throw new Error(`В массиве книг [${books}] есть дубликаты!!!`);
            }
            this.#books = books;
        } catch (error) {
            console.log(error.message);
        }
    }

    get allBooks() {
        return this.#books.join(', ');
    }

    addBook(title) {
        try {
            if (this.hasBook(title)) {
                throw new Error(`Книга "${title}" уже есть в библиотеке!!!`);
            }
            this.#books.push(title);
        } catch (error) {
            console.log(error.message);
        }
    }

    removeBook(title) {
        try {
            if (!this.hasBook(title)) {
                throw new Error(`Книги "${title}" в библиотеке нет!!!`);
            }
            const filteredBooks = this.#books.filter(el => el !== title);
            this.#books = filteredBooks;
        } catch (error) {
            console.log(error.message);
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

// const mybooks = ['Война и мир', 'Три мушкетера', 'Граф Монтекристо', 'Три мушкетера'];
const mybooks = ['Война и мир', 'Три мушкетера', 'Граф Монтекристо'];
let myLibrary = new Library(mybooks);
console.log(myLibrary.allBooks);
console.log('');
console.log(`Есть ли книга с названием "Буратино" в библиотеке? Ответ: ${myLibrary.hasBook('Буратино')}.`);
myLibrary.addBook('Буратино');
myLibrary.addBook('Буратино');
console.log(myLibrary.allBooks);
console.log('');
myLibrary.removeBook('Три мушкетера');
myLibrary.removeBook('Три поросенка');
console.log(myLibrary.allBooks);
console.log('');
