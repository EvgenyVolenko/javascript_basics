import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Box from './components/Box';
import pic from './img/1.jpg'
import App from './App';
import MainPage from './components/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Box>
        <span style={{ fontStyle: "italic" }}>Child</span>
      </Box>
      <Box>
        Text second
      </Box>
      <Box>
        <img
          src={pic}
          style={{ width: 100 }}
          alt=""
        />
      </Box>
      <Box children={<div style={{ paddingTop: 10 }}>Child</div>} />
      <App />
      <MainPage />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
