import styles from './my.module.css';
import { useSelector } from 'react-redux';

function Profile() {

    const theme = useSelector((state) => state.switch.value);

    return (
        <div className={theme === false ? `${styles.light}` : `${styles.dark}`}>
            <h3>Profile</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

export default Profile;