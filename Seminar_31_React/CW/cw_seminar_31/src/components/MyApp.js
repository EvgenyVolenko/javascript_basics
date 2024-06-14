// ● Создайте контексты UserContext и ThemeContext с начальными
// значениями (например, имя пользователя: "Гость", тема: "светлая").
// ● Реализуйте компонент App:
// ○ Оберните дочерние компоненты в UserContext.Provider и
// ThemeContext.Provider.
// ○ Добавьте возможность изменения имени пользователя и
// темы через интерфейс пользователя.
// ● Создайте компоненты, использующие эти контексты:
// ○ Header должен отображать приветствие с именем
// пользователя.
// ○ Profile может показывать более детальную информацию о
// пользователе или просто использовать тему для стилизации.
// ○ Footer должен использовать тему для стилизации и,
// возможно, отображать копирайт с текущим годом.
// ● Добавьте возможность изменения темы и имени пользователя в
// интерфейсе, используя состояние в компоненте App и передавая
// функции для изменения через контекст.


import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Profile from "./Profile";

export const UserContext = React.createContext('Guest');
export const ThemeContext = React.createContext('light');

function MyApp() {

    const [theme, setTheme] = useState('light');
    const [userName, setUserName] = useState('Guest');

    function changeUserName(e) {
        const newUserName = e.target.closest('div').querySelector('input').value;
        setUserName(newUserName);
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={userName}>
                    <Header />
                    <div>
                        <input />
                        <button onClick={changeUserName}>Edit user name</button>
                    </div>
                    <Profile />
                    <Footer />
                    <div>
                        <button onClick={toggleTheme}>Change theme</button>
                    </div>
                </UserContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}

export default MyApp;