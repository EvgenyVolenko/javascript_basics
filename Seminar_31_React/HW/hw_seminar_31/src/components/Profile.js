import { useContext } from "react";
import classes from './Profile.module.css';
import { ThemeContext } from "./MyApp";

function Profile() {

    const theme = useContext(ThemeContext);

    return (
        <div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>
            <h3>Profile</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

export default Profile;