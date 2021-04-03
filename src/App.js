import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios'; 
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SelectTickets from './components/SelectTickets';
import UserDetails from './components/UserDetails';
import Basket from './components/Basket';
import Confirmation from './components/Confirmation';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    document.title="FlexTickets",
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site still under creation
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy a Ticket
        </a>
      </header>
    </div>
  );
}

export default App;
