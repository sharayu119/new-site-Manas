import React from 'react';

const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Bruschetta", price: "$8.99", description: "Toasted bread with fresh tomatoes and herbs" },
      { name: "Calamari", price: "$12.99", description: "Crispy fried calamari with marinara sauce" }
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Grilled Salmon", price: "$24.99", description: "Fresh salmon with seasonal vegetables" },
      { name: "Beef Tenderloin", price: "$29.99", description: "Premium cut with red wine reduction" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Tiramisu", price: "$7.99", description: "Classic Italian dessert" },
      { name: "Chocolate Lava Cake", price: "$8.99", description: "Warm chocolate cake with vanilla ice cream" }
    ]
  }
];

const MenuCard = ({ title, description, price, image, badge }) => (
  <div className="menu-item">
    <div className="item-header">
      <h4>{title}</h4>
      <span className="price">{price}</span>
    </div>
    <p className="description">{description}</p>
  </div>
);

const MenuSection = () => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2>Our Menu</h2>
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h3>{category.category}</h3>
            <div className="menu-items">
              {category.items.map((item, itemIndex) => (
                <MenuCard key={itemIndex} title={item.name} price={item.price} description={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;