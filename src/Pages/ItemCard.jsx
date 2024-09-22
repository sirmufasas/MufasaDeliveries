import React from 'react';
import '../ItemCard.css'; // Add custom styles for individual item cards

const ItemCard = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <div className="item-controls">
        <button onClick={removeFromCart} className="remove-btn">-</button>
        <button onClick={addToCart} className="add-btn">+</button>
      </div>
    </div>
  );
};

export default ItemCard;