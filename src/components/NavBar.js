import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="App">
      <h1>Logo</h1>
      {/* <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul> */}
    </nav>
  );
}

export default NavBar;