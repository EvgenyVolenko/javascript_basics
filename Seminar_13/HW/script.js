// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [3, 12, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. 
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 
// 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = function (startValue) {
    return {
        counter: startValue,
        increment() {
            this.counter++;
            return this.counter;
        },
        decrement() {
            this.counter--;
            return this.counter;
        }
    }
}

const createC = createCounter(7);
console.log(createC.counter);
console.log(createC.increment());
console.log(createC.increment());
console.log(createC.decrement());
console.log(createC.counter);

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса
// в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const findElementByClass = function (element, className) {
    if (!element) return;
    if (element.classList.contains(className)) {
        return element;
    }

    let findedEl = null;

    labelCancel: for (let el of element.children) {
        if (el.classList.contains(className)) {
            console.log(el);
            findedEl = el;
            break labelCancel;
        }
        findElementByClass(el, className);
    };

    return findedEl;
};

const rootElement = document.getElementById('root');
// console.log(rootElement);
// console.log(rootElement.querySelector('.my-class'));
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);