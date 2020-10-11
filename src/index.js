import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContextProvider } from './context/GlobalContext';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import './App.css';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <GlobalContextProvider>
    <Router>
      <ThemeProvider theme={theme}  >
        <App />
      </ThemeProvider>
    </Router>
  </GlobalContextProvider>,
  document.getElementById('root')
);