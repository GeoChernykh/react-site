import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


const app = ReactDOMClient.createRoot(document.getElementById('app'));

app.render(<App />);