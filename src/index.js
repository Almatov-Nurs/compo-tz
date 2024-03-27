// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import App from './App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Styles
import './style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>
);
