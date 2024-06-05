// Создать компонент Timer, который отображает таймер, увеличивающийся на 1
// каждую секунду. Использовать useEffect для установки и очистки интервала.

import React, { useState, useEffect } from 'react';


function Timer() {

    const [time, setTime] = useState(0);

    const incrementFunc = () => {
        setTime(time + 1);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            incrementFunc();
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    });

    return (
        <div>
            {time}
        </div>
    );
}

export default Timer;