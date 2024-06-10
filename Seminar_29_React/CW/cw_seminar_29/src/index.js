import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import { MessagesList } from './components/MessagesList';
import ThemeSwitcher from './components/ThemeSwitcher';
import TextDisplayForm from './components/TextDisplayForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting name='Вася' />
    <Greeting name='Петя' />
    <Greeting name='Катя' />
    <Counter />
    <MessagesList />
    <ThemeSwitcher />
    <br />
    <TextDisplayForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
