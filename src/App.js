import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios'; 
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
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
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/About-us" component={About}/>
        <Route path="/AllEvents" component={HomePage}/>
        <Route path="/SelectTickets" component={SelectTickets}/>
        <Route path="/UserDetails" component={UserDetails}/>
        <Route path="/Basket" component={Basket}/>
        <Route path="/Confirmation" component={Confirmation}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
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
    </BrowserRouter>
  );
}

export default App;
