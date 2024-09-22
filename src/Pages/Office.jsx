import React, { useState } from 'react';
import './Office.css'; // Add your styling
import ItemCard from './ItemCard'; // Reusable component for office items

const officeItems = [
  { id: 1, name: 'Office Chair', price: 120.00, image: 'chair.png', description: 'Comfortable ergonomic office chair.' },
  { id: 2, name: 'Desk Organizer', price: 25.00, image: 'organizer.png', description: 'Keep your workspace tidy.' },
  { id: 3, name: 'Monitor', price: 199.99, image: 'monitor.png', description: '27-inch HD monitor for productivity.' },
  { id: 4, name: 'Keyboard', price: 50.00, image: 'keyboard.png', description: 'Mechanical keyboard with backlight.' },
];

const Office = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${item.name} added to the cart!`);
  };

  return (
    <div className="office-page">
      <h1>Office Supplies</h1>
      <div className="item-grid">
        {officeItems.map(item => (
          <ItemCard key={item.id} item={item} addToCart={() => addToCart(item)} />
        ))}
      </div>
    </div>
  );
};

export default Office;
