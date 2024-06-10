// Создайте компонент ThemeSwitcher. Этот компонент будет
// содержать кнопку, при нажатии на которую будет меняться
// тема интерфейса (светлая/темная).
// ● Используйте useState для управления текущей темой. Храните
// состояние текущей темы в компоненте ThemeSwitcher.
// Состояние может быть простой строкой, например, "light" или
// "dark".
// ● Передайте текущую тему в виде пропса в другой компонент,
// который изменит свой стиль в зависимости от полученной
// темы. Например, создайте компонент Content, который
// изменяет свой фоновый цвет в зависимости от темы.
// ● Добавьте логику для переключения темы в ThemeSwitcher. При
// нажатии на кнопку должно происходить переключение между
// "light" и "dark" состояниями, и это изменение должно
// отражаться в компоненте Content.

import { useState } from "react";
import Content from "./Content";

function ThemeSwitcher() {

    const [conditionTheme, setCondition] = useState(true);

    const switcher = function () {
        setCondition(!conditionTheme);
    }

    return (
        <>
            <Content count={conditionTheme} />
            <button onClick={switcher}>Изменить тему</button>
        </>
    );
}

export default ThemeSwitcher;