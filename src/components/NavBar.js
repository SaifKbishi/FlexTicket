import React from 'react'
import '../css/tickets.css';
import {Link} from 'react-router-dom'

const NavBar =()=> {
  return (
    <nav className="navBar">
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