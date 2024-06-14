import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_THEME } from './ThemeSlice.js';
import styles from './my.module.css';

function Switch() {
    let switchTheme = useSelector((state) => state.switch.value);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.switch.value);

    return (
        <div className={theme === false ? `${styles.light}` : `${styles.dark}`}>
            {switchTheme === true && (
                <h1>Сейчас тема - 'Темная'</h1>
            )}
            {switchTheme === false && (
                <h1>Сейчас тема - 'Светлая'</h1>
            )}

            <button onClick={() => dispatch(TOGGLE_THEME())}>Изменить тему</button>
        </div>
    );
}

export default Switch;