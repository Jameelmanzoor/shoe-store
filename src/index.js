import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContextProvider } from './context/GlobalContext';
import App from './App';
import './App.css';



ReactDOM.render(
  <GlobalContextProvider>
    <Router>
      <App />
    </Router>
  </GlobalContextProvider>,
  document.getElementById('root')
);