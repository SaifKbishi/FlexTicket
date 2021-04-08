import React from 'react'
import '../css/tickets.css';
import {Link} from 'react-router-dom'
//https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg
const NavBar =()=> {
  return (
    <nav className="navBar">
      
      <span>
        <Link to="/movies">          
          <img className='logo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt=""></img>
        </Link>
      </span>
      <ul className="nav-links">
        <Link to="/movies">
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
        {/* <Link to="/GenresCarousel">
          <li>Genres Carousel</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default NavBar;