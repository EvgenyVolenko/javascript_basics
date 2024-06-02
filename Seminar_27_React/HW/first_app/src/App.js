import './App.css';

const myMessage1 = 'Переданное через пропс сообщение!!! в App.js';

function App() {
  return (
    <div className="App-header">
      <p>При помощи App()</p>
      <Message message={myMessage1} />
    </div>
  );
}

function Message(props) {
  return (
    <div className="App-header">
      <p>My_message - {props.message}</p>
    </div>
  );
}

export { App as default, Message };