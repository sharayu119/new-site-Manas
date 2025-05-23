import React from 'react';

const About = () => (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
            <div className="container">
              <div className="about-content">
                <p className="label-2 section-subtitle" id="about-label">Our Story</p>
                <h2 className="headline-1 section-title">Every Flavor Tells a Story</h2>
                <p className="section-text">
                  "आपलं स्वागत आहे!
                  Experience the soul of Satara in every bite.
                  Relish our famous Mutton Thali, Tambda-Pandhra Rassa, authentic seafood delicacies, and more — all served with traditional Maharashtrian hospitality.
                  Our expert chefs from Satara bring you flavors passed down through generations.
                  सातार्‍याच्या पारंपरिक चवांचा आस्वाद घ्या — आमच्यासोबत!
                  Join us and savor the essence of Maharashtra, daily!"
                </p>
                <div className="contact-label">Book Through Call</div>
                <a href="tel:+804001234567" className="body-1 contact-number hover-underline">+80 (400) 123 4567</a>
                <a href="#" className="btn btn-primary">
                  <span className="text text-1">Read More</span>
                  <span className="text text-2" aria-hidden="true">Read More</span>
                </a>
              </div>
              <figure className="about-banner">
                <img src="./assets/images/about-banner.jpg" width={570} height={570} loading="lazy" alt="about banner" className="w-100" data-parallax-item data-parallax-speed={1} />
                <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
                  <img src="./assets/images/about-abs-image.jpg" width={285} height={285} loading="lazy" alt className="w-100" />
                </div>
                <div className="abs-img abs-img-2 has-before">
                  <img src="./assets/images/badge-2.png" width={133} height={134} loading="lazy" alt />
                </div>
              </figure>
              <img src="./assets/images/shape-3.png" width={197} height={194} loading="lazy" alt className="shape" />
            </div>
          </section>

);
export default Service;