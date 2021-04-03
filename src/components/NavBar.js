import React from 'react'
import '../App.css';
import '../css/tickets.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="App">
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link to="/AllEvents">
          <li>Home Page</li>
        </Link>
        <Link to="/About-us">
          <li>About-us</li>
        </Link>
        <Link to="/Contact">
          <li>Contact-us</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;