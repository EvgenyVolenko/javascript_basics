# Данный пакет предназначен для решения квадратных уравнений
## Принцип работы 
1. В функцию quadraticEquation передаются аргументы квадратного уравнения a, b, c.
2. Функция quadraticEquation возвращает ответ в виде массива чисел или возвращает null, если уравнение не имеет решения.

## Утановка пакета 
    npm i volquadraticequation

## Пример использования

> const res = require('volquadraticequation');
>
> const result = res.calcResults(1, 10, -39);
>
> console.log(result);
>
> Результат: [ 3, -13 ]