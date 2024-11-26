import React, { useState } from 'react';
import './Office.css';
import chairImage from '../Assets/chair.png';
import organizerImage from '../Assets/organizer.png';
import monitorImage from '../Assets/monitor.png';
import keyboardImage from '../Assets/keyboard.png';
import ItemCard from './ItemCard';

const officeItems = [
  { id: 1, name: 'Office Chair', price: 120.00, image: chairImage, description: 'Comfortable ergonomic office chair.' },
  { id: 2, name: 'Desk Organizer', price: 25.00, image: organizerImage, description: 'Keep your workspace tidy.' },
  { id: 3, name: 'Monitor', price: 199.99, image: monitorImage, description: '27-inch HD monitor for productivity.' },
  { id: 4, name: 'Keyboard', price: 50.00, image: keyboardImage, description: 'Mechanical keyboard with backlight.' },
];

const Office = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`R{item.name} added to the cart!`);
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
