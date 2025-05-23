import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <img src="/images/logo2.png" alt="Hotel Manas Logo" />
        </div>
        <nav className="navbar">
          <ul className="nav-menu">
            <li><a href="#top">HOME</a></li>
            <li><a href="#restaurants">RESTAURANTS</a></li>
            <li><a href="#cafes">CAFES</a></li>
            <li><a href="#hotels">HOTELS</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 