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
        <Link to="/UserDetails">
          <li>Register / Login</li>
        </Link>
        <Link to="/GenresCarousel">
          <li>Genres Carousel</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;