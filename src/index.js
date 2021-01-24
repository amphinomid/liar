import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width' />
      <title>who's the liar? 👀</title>
      <link rel='stylesheet' href='https://unpkg.com/blocks.css/dist/blocks.min.css' />
    </head>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
