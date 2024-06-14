import { Provider } from 'react-redux';
import { store } from './Store.js';
import Switch from './Switch.js';


export default function MyApp() {

    return (
        <div>
            <Provider store={store}>
                <Switch />
            </Provider>
        </div>
    )
}