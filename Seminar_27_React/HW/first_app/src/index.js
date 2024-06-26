import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Message from './components/Message';
import reportWebVitals from './reportWebVitals';

const myMessage = 'Переданное через пропс сообщение!!!';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Message message={myMessage} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
