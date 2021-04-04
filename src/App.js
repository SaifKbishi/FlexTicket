// import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import axios from 'axios'; 
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import SelectTickets from './components/SelectTickets';
import UserDetails from './components/UserDetails';
import Basket from './components/Basket';
import Confirmation from './components/Confirmation';
import MovieDetails from './components/MovieDetails';


import logo from './logo.svg';
import './App.css';
import './css/tickets.css';

function App() {
  return (
    document.title="FlexTickets",
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/about-us" component={About}/>
        <Route path="/movies" exact component={HomePage}/>
        <Route path="/movies/:id" component={MovieDetails}/>
        {/* <Route path="/" component={HomePage}/> */}
        <Route path="/selecttickets" component={SelectTickets}/>
        <Route path="/userdetails" component={UserDetails}/>
        <Route path="/basket" component={Basket}/>
        <Route path="/confirmation" component={Confirmation}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site still under creation
        </p>      
      </header>

    </div>
    </BrowserRouter>
  );
}

export default App;
