// ● Создать компонент Counter, который отображает кнопку и
// число.
// ● Число увеличивается на 1 каждый раз, когда пользователь
// нажимает на кнопку.

import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCount}>Увеличить на 1</button>
        </div>
    );
}

export default Counter;