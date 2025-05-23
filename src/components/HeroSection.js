import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/hero-slider-1.jpg',
      title: 'Welcome to Hotel Manas',
      subtitle: 'Experience luxury and comfort like never before'
    },
    {
      image: '/images/hero-slider-2.jpg',
      title: 'Fine Dining Experience',
      subtitle: 'Savor the taste of exquisite cuisine'
    },
    {
      image: '/images/hero-slider-3.jpg',
      title: 'Luxury Accommodations',
      subtitle: 'Unwind in our premium rooms and suites'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`
            }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <div class="hero-separator">
                <div class="dot"></div>
                <div class="line"></div>
                <div class="diamond"></div>
                <div class="diamond"></div>
                <div class="diamond"></div>
                <div class="line"></div>
                <div class="dot"></div>
              </div>
              <p>{slide.subtitle}</p>
              <div className="cta-buttons">
                {index === 0 && (
                  <button className="outline-button">Explore Restaurants</button>
                )}
                {index === 1 && (
                  <button className="outline-button">Book a Table</button>
                )}
                {index === 2 && (
                  <button className="outline-button">Book Your Stay</button>
                )}
              </div>

            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="slider-nav prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-nav next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Slide Indicators */}
        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 