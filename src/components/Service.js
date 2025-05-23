import React from 'react';

const Service = () => {
  return (
    <section id="our-story" className="our-story-section">
      <div className="container">
        <div className="our-story-content">
          <div className="story-text">
            <p>OUR STORY</p>
            <h2>Every Flavor<br />Tells a Story</h2>
            <p>"आपलं स्वागत आहे! Experience the soul of Satara in every bite. Relish our famous Mutton Thali, Tambda-Pandhra Rassa, authentic seafood delicacies, and more – all served with traditional Maharashtrian hospitality. Our expert chefs from Satara bring you flavors passed down through generations. सातारच्या पारंपरिक चवीचा आस्वाद घ्या – आमच्यासोबत! Join us and savor the essence of Maharashtra, daily!"</p>
            <p><b>Book Through Call</b></p>
            <p>+80 (400) 123 4567</p>
            <button className="read-more-btn">READ MORE</button>
          </div>
          {/* Placeholders for images */}
          <div className="story-images">
            <img src="/images/about-banner.jpg" alt="Restaurant interior" className="story-banner-img" />
           
            <img src="/images/about-abs-image.jpg" alt="Chef preparing food" className="story-chef-img" />
            {/* Decorative elements */}
            
            <div className="decorative-element top-right"></div>
            <div className="decorative-element bottom-left"></div>
            {/* Replaced Since 1950 text with images */}
            <div className="since-1950-badge">
              <img src="/images/badge-2-bg.png" alt="Fresh Environment Quality Food" className="badge-bg" />
              <img src="/images/badge-2.png" alt="Since 1950" className="badge-text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service; 