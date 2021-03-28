import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorBoundary from './ErrorBoundary';
import  { AppProvider } from './AppContext';
import App from './App';

window.onload = function(){
  document.onselectstart = function(){
    return false;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

