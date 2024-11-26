import React from 'react';
import './Item.css'; // Ensure this path is correct

const Item = (props) => {
  const { image, name, description, new_price, old_price, rating } = props;

  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <p className="item-name">{name}</p>
      <p className="item-description">{description}</p>
      <div className="item-price">
        {/* Check if new_price exists and handle gracefully */}
        {new_price !== null && new_price !== undefined ? (
          <span className="item-new-price">${new_price.toFixed(2)}</span>
        ) : (
          <span className="item-new-price">Price not available</span>
        )}
        {/* Only display old_price if it exists */}
        {old_price !== null && old_price !== undefined && (
          <span className="item-old-price">${old_price.toFixed(2)}</span>
        )}
      </div>
      <div className="item-rating">
        {`Rating: ${rating} ⭐`}
      </div>
    </div>
  );
};

export default Item;
