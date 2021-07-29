import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form'
import reportWebVitals from './reportWebVitals';
import Insertform from './Insertform';
import Fetchdata from './Fetchdata';
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Editform from './Editform';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
