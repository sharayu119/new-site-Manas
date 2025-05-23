import React from 'react';

const Herosection = () => (
    <section className="section hero" id="home" aria-label="home">
            <div className="container">
              <div className="hero-content" data-hero-slider>
                <div className="slider-item active" data-hero-slider-item>
                  <div className="slider-bg">
                    <img src="./assets/images/hero-slider-1.jpg" width={1920} height={1080} alt="hero banner" className="img-cover" />
                  </div>
                  <p className="section-subtitle slider-reveal">Welcome to</p>
                  <h1 className="display-1 slider-reveal">Manas Satara</h1>
                  <p className="hero-text slider-reveal">Experience luxury dining, cozy cafes, and premium hospitality under one brand.</p>
                  <div className="hero-buttons slider-reveal">
                    <a href="venues/restaurants.html" className="btn btn-primary">Our Restaurants</a>
                    <a href="venues/cafes.html" className="btn btn-secondary">Our Cafes</a>
                    <a href="venues/hotels.html" className="btn btn-primary">Our Hotels</a>
                  </div>
                </div>
                <div className="slider-item" data-hero-slider-item>
                  <div className="slider-bg">
                    <img src="./assets/images/hero-slider-2.jpg" width={1920} height={1080} alt="hero banner" className="img-cover" />
                  </div>
                  <p className="section-subtitle slider-reveal">Fine Dining</p>
                  <h1 className="display-1 slider-reveal">Exquisite Cuisine</h1>
                  <p className="hero-text slider-reveal">Discover our collection of premium restaurants offering exceptional dining experiences.</p>
                  <div className="hero-buttons slider-reveal">
                    <a href="venues/restaurants.html" className="btn btn-primary">Explore Restaurants</a>
                  </div>
                </div>
                <div className="slider-item" data-hero-slider-item>
                  <div className="slider-bg">
                    <img src="./assets/images/hero-slider-3.jpg" width={1920} height={1080} alt="hero banner" className="img-cover" />
                  </div>
                  <p className="section-subtitle slider-reveal">Luxury Stay</p>
                  <h1 className="display-1 slider-reveal">Premium Hospitality</h1>
                  <p className="hero-text slider-reveal">Experience unparalleled comfort and world-class amenities at our premium hotels.</p>
                  <div className="hero-buttons slider-reveal">
                    <a href="venues/hotels.html" className="btn btn-primary">Book Your Stay</a>
                  </div>
                </div>
                <button className="slider-btn prev" aria-label="previous slide" data-prev-btn>
                  <ion-icon name="chevron-back" aria-hidden="true" />
                </button>
                <button className="slider-btn next" aria-label="next slide" data-next-btn>
                  <ion-icon name="chevron-forward" aria-hidden="true" />
                </button>
              </div>
            </div>
          </section>
);
export default Herosection;