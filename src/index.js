import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, HashRouter} from "react-router-dom"
import {ContextProvider} from "./Context"
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    {/*<Router>*/}
    <HashRouter>
      <App />
     </HashRouter>
    {/*</Router>*/}
  </ContextProvider>
);
