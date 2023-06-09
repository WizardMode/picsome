import React from 'react';
import ReactDOM from 'react-dom/client';
//import {BrowserRouter as Router} from "react-router-dom"
import { HashRouter as Router } from 'react-router-dom';
import {ContextProvider} from "./Context"
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <Router>
      <App />
     </Router>
  </ContextProvider>
);
