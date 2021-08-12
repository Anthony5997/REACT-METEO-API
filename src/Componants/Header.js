import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return ( 
    <header className="App-header">
       <Link to="/"> 
          <img src="logo-meteo.png" className="App-logo" alt="logo"/>
       </Link>
    </header>
  );
}

export default Header;