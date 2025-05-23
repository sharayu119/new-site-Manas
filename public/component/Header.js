import React from 'react';

const Header = () => (
        <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src="./assets/images/logo2.png" width={200} height={80} alt="Manas - Home" />
          </a>
          <nav className="navbar" data-navbar>
            <button className="close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true" />
            </button>
            <a href="#" className="logo">
              <img src="./assets/images/logo2.png" width={160} height={50} alt="Manas - Home" />
            </a>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="index.html" className="navbar-link hover-underline active">
                  <div className="separator" />
                  <span className="span">Home</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="venues/restaurants.html" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Restaurants</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="venues/cafes.html" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Cafes</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="venues/hotels.html" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Hotels</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="about/index.html" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">About Us</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="contact/index.html" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Contact</span>
                </a>
              </li>
            </ul>
            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>
              <address className="body-4">
                Manas Satara, Shivajinagar, Pune,<br />
                Maharashtra 411005
              </address>
              <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
              <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@manassatara.com</a>
              <div className="separator" />
              <p className="contact-label">Booking Request</p>
              <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
                +88-123-123456
              </a>
            </div>
          </nav>
          {/* <a href="#" class="btn btn-secondary">
  <span class="text text-1">Find A Table</span>

  <span class="text text-2" aria-hidden="true">Find A Table</span>
</a> */}
          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span className="line line-1" />
            <span className="line line-2" />
            <span className="line line-3" />
          </button>
          <div className="overlay" data-nav-toggler data-overlay />
        </div>
      </header>

); 
export default Header;