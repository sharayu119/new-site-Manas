import React from 'react';

const Service = () => (
    <section className="section service" id="service" aria-label="service">
            <div className="container">
              <p className="section-subtitle text-center">Our Venues</p>
              <h2 className="section-title text-center">Experience Manas Satara</h2>
              <ul className="grid-list">
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img src="./assets/images/restaurant-icon.jpg" width={100} height={100} loading="lazy" alt="Restaurants" />
                    </div>
                    <h3 className="card-title">Fine Dining</h3>
                    <p className="card-text">Discover our collection of premium restaurants offering exquisite cuisine and exceptional service.</p>
                    <a href="venues/restaurants.html" className="btn-text">Explore Restaurants</a>
                  </div>
                </li>
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img src="./assets/images/cafe-icon.jpg" width={100} height={100} loading="lazy" alt="Cafes" />
                    </div>
                    <h3 className="card-title">Cozy Cafes</h3>
                    <p className="card-text">Enjoy specialty coffee, delicious pastries, and a perfect ambiance for work or relaxation.</p>
                    <a href="venues/cafes.html" className="btn-text">Explore Cafes</a>
                  </div>
                </li>
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img src="./assets/images/hotel-icon.jpg" width={100} height={100} loading="lazy" alt="Hotels" />
                    </div>
                    <h3 className="card-title">Luxury Hotels</h3>
                    <p className="card-text">Experience unparalleled comfort and world-class amenities at our premium hotels.</p>
                    <a href="venues/hotels.html" className="btn-text">Explore Hotels</a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
);
export default Service;
