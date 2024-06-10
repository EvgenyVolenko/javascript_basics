// 1. Разработайте компонент Counter, который отображает число и
// две кнопки: одна для увеличения значения на 1, а другая для
// уменьшения на 1.
// 2. Используйте хук useState для управления состоянием счётчика.
// 3. Кнопки можно сделать с помощью material ui

import React, { useState } from "react";
import Button from '@mui/material/Button';

function Counter() {

    const [count, setCount] = useState(10);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <Button variant="contained" onClick={incrementCount}>Увеличить на 1</Button>
            <p>{count}</p>
            <Button variant="contained" onClick={decrementCount}>Уменьшить на 1</Button>
        </div>
    );
}

export default Counter;