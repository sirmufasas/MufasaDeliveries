import React from 'react';
import '../ItemCard.css'; 
import notebookImage from '../Assets/notebook.png';
import pencilCaseImage from '../Assets/pencilcase.png';
import backpackImage from '../Assets/backpack.png';
import highlighterImage from '../Assets/highlighter.png';

const ItemCard = ({ addToCart, removeFromCart }) => {
  const items = [
      { id: 1, name: 'Notebook', price: 34.00, image: notebookImage, description: '200-page lined notebook.' },
      { id: 2, name: 'Pencil Case', price: 20.00, image: pencilCaseImage, description: 'Spacious pencil case with compartments.' },
      { id: 3, name: 'Backpack', price: 500.00, image: backpackImage, description: 'Durable backpack with multiple pockets.' },
      { id: 4, name: 'Highlighter Set', price: 50.00, image: highlighterImage, description: '5-pack highlighters in various colors.' },
  ];

  return (
      <div className="item-grid">
          {items.map((item) => (
              <div key={item.id} className="item-card">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className="item-controls">
                      <button onClick={() => removeFromCart(item.id)} className="remove-btn">-</button>
                      <button onClick={() => addToCart(item.id)} className="add-btn">+</button>
                  </div>
              </div>
          ))}
      </div>
  );
};

export default ItemCard;
