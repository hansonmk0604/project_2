import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import NavBar from "./NavBar";

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
    <CookiesProvider>
        <BrowserRouter>
            <NavBar/>
            <App/>
        </BrowserRouter>
    </CookiesProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
