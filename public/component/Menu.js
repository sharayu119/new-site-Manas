
import React from "react";
 // Make sure to create/use the corresponding CSS or import from your styles

const Menu = [
  {
    title: "Greek Salad",
    description: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: "$25.50",
    image: "/assets/images/menu-1.png",
    badge: "Seasonal",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  {
    title: "Lasagne",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    price: "$40.00",
    image: "/assets/images/menu-2.png",
  },
  

  // Add more items here as needed
];

const MenuCard = ({ title, description, price, image, badge }) => (
  <li className="menu-card hover:card">
    <figure className="card-banner img-holder" style={{ "--width": 100, "--height": 100 }}>
      <img src={image} width="100" height="100" alt={title} className="img-cover" />
    </figure>

    <div>
      <div className="title-wrapper">
        <h3 className="title-3">
          <a href="#" className="card-title">{title}</a>
        </h3>
        {badge && <span className="badge label-1">{badge}</span>}
        <span className="span title-2">{price}</span>
      </div>
      <p className="card-text label-1">{description}</p>
    </div>
  </li>
);

const MenuSection = () => {
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Special Selection</p>
        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>
        <ul className="grid-list">
          {menuItems.map((item, idx) => (
            <MenuCard key={idx} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
