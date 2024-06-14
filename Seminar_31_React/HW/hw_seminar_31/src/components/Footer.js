import styles from './my.module.css';
import { useState } from "react";
import { useSelector } from 'react-redux';


function Footer() {

    const theme = useSelector((state) => state.switch.value);
    const [now, setNow] = useState(new Date());

    setInterval(() => {
        setNow(new Date());
    }, 1000);

    return (
        <>
            <section className={theme === false ? `${styles.light}` : `${styles.dark}`}>
                <h2>Footer</h2>
                <p>© 2024</p>
                <p>Time: {now.toLocaleTimeString()}</p>
            </section>
        </>
    );
}

export default Footer;