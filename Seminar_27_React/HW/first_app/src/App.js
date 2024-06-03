import './App.css';
import Message from './components/Message';

const myMessage1 = 'Переданное через пропс сообщение!!! в App.js';

function App() {
  return (
    <div className="App-header">
      <p>При помощи App()</p>
      <Message message={myMessage1} />
    </div>
  );
}

export default App;