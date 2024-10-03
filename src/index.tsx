import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/app.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '@assets/theme';
const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <Router>
         <PrimeReactProvider
            value={{
               unstyled: true,
               pt: theme
            }}
         >
            <App />
         </PrimeReactProvider>
      </Router>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
