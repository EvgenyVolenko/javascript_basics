import { Provider } from 'react-redux';
import { store } from './Store.js';
import Switch from './Switch.js';
import Header from './Header.js';
import Profile from './Profile.js';
import Footer from './Footer.js';


export default function MyApp() {

    return (
        <>
            <Provider store={store}>
                <Switch />
                <Header />
                <Profile />
                <Footer />
            </Provider>
        </>
    )
}