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

const iteratorForChild = function* (element) {
    if (!element) {
        return;
    }
    yield element;
    for (let child of element.children) {
        yield* iteratorForChild(child);
    }
};

const findElementByClass = function (element, className) {
    let res = [];
    for (let el of iteratorForChild(element)) {
        if (el.classList.contains(className)) {
            res.push(el);
        }
    }
    return res[0];
};

const saver = function () {
    return {
        saverArr: [],
        add(el) {
            this.saverArr.push(el);
        },
        returnEl(num) {
            return this.saverArr[num];
        }
    }
};

const saved = saver();

const findElementByClassMy = function (element, className) {
    if (element.classList.contains(className)) {
        saved.add(element);
    }
    else {
        for (let el of element.children) {
            findElementByClassMy(el, className);
        }
    }
    return saved.returnEl(0);
};

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

const targetElementMy = findElementByClassMy(rootElement, 'my-class');
console.log(targetElementMy);