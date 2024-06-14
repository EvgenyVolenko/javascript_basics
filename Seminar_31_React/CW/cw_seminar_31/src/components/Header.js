import { useContext } from "react";
import { UserContext, ThemeContext } from "./MyApp";
import classes from './Profile.module.css';

function Header() {

    const userName = useContext(UserContext);
    const theme = useContext(ThemeContext);

    return (
        <div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>
            <h2>Привет, {userName}</h2>
        </div>
    );
}

export default Header;