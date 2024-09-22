import React, { useState } from 'react';
import './School.css'; // Add your styling
import ItemCard from './ItemCard'; // Reusable component for school items

const schoolItems = [
  { id: 1, name: 'Notebook', price: 5.00, image: 'notebook.png', description: '200-page lined notebook.' },
  { id: 2, name: 'Pencil Case', price: 8.00, image: 'pencilcase.png', description: 'Spacious pencil case with compartments.' },
  { id: 3, name: 'Backpack', price: 30.00, image: 'backpack.png', description: 'Durable backpack with multiple pockets.' },
  { id: 4, name: 'Highlighter Set', price: 12.00, image: 'highlighter.png', description: '5-pack highlighters in various colors.' },
];

const School = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      const updatedCart = cartItems.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem.quantity === 1) {
      const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
      setCartItems(updatedCart);
    } else {
      const updatedCart = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="school-page">
      <h1>School Supplies</h1>
      <div className="item-grid">
        {schoolItems.map(item => (
          <ItemCard 
            key={item.id} 
            item={item} 
            addToCart={() => addToCart(item)} 
            removeFromCart={() => removeFromCart(item)} 
          />
        ))}
      </div>
    </div>
  );
};

export default School;
