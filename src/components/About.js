import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Hotel Manas</h2>
        <div className="about-content">
          <p>Welcome to Hotel Manas, where luxury meets comfort. Our hotel offers world-class amenities and exceptional service to make your stay memorable.</p>
          <div className="features">
            <div className="feature">
              <i className="fas fa-bed"></i>
              <h3>Luxury Rooms</h3>
              <p>Comfortable and well-appointed rooms for your stay</p>
            </div>
            <div className="feature">
              <i className="fas fa-utensils"></i>
              <h3>Fine Dining</h3>
              <p>Experience exquisite cuisine at our restaurants</p>
            </div>
            <div className="feature">
              <i className="fas fa-spa"></i>
              <h3>Spa & Wellness</h3>
              <p>Relax and rejuvenate at our spa facilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 