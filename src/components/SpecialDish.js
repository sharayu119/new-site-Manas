import React from 'react';

const SpecialDish = () => {
  return (
    <section id="special-dish" className="special-dish-section">
      <div className="container">
        <h2>Today's Special</h2>
        <div className="special-dish-content">
          <div className="dish-image">
            {/* Add your dish image here */}
            <img src="/images/special-dish.jpg" alt="Special Dish" />
          </div>
          <div className="dish-details">
            <h3>Chef's Special</h3>
            <p className="description">
              Experience our chef's signature dish, prepared with the finest ingredients
              and traditional cooking techniques.
            </p>
            <div className="dish-info">
              <span className="price">$24.99</span>
              <button className="order-btn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDish; 