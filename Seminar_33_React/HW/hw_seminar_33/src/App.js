import './App.css';
import GetData from './components/getData';
import TasksList from './components/tasksList';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <TasksList />
        <GetData />
      </Provider>
    </>
  );
}

export default App;
