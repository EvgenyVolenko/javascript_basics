import { useSelector } from 'react-redux';
import styles from './my.module.css';

function Header() {

    const theme = useSelector((state) => state.switch.value);

    return (
        <>
            <div className={theme === false ? `${styles.light}` : `${styles.dark}`}>
                <h2>Привет!!!</h2>
            </div>
        </>
    );
}

export default Header;