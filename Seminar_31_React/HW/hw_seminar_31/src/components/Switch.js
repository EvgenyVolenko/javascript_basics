import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_THEME } from './ThemeSlice.js';

function Switch() {
    let switchTheme = useSelector((state) => state.switch.value);

    const dispatch = useDispatch();

    return (
        <>
            {switchTheme === true && (
                <h3>Сейчас тема - 'Темная'</h3>
            )}
            {switchTheme === false && (
                <h3>Сейчас тема - 'Светлая'</h3>
            )}

            <button onClick={() => dispatch(TOGGLE_THEME())}>Изменить тему</button>
        </>
    );
}

export default Switch;