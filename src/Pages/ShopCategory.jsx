import React from 'react';
import office_banner from '../Components/Assets/office_banner.png';
import school_banner from '../Components/Assets/school_banner.png';
import notebookImage from '../Components/Assets/notebook.png';
import pencilCaseImage from '../Components/Assets/pencilcase.png';
import backpackImage from '../Components/Assets/backpack.png';
import highlighterImage from '../Components/Assets/highlighter.png';
import chairImage from '../Components/Assets/chair.png';
import organizerImage from '../Components/Assets/organizer.png';
import monitorImage from '../Components/Assets/monitor.png';
import keyboardImage from '../Components/Assets/keyboard.png';

const ShopCategory = ({ category, addToCart }) => {
  // Map categories to banners
  const banners = {
    office: office_banner,
    school: school_banner,
  };

  // Get the appropriate banner or fallback to a default one
  const selectedBanner = banners[category] || null; // No default banner image is needed

  // Updated product data for each category
  const products = {
    office: [
      { id: 1, name: 'Office Chair', price: 120.00, image: chairImage, description: 'Comfortable ergonomic office chair.' },
      { id: 2, name: 'Desk Organizer', price: 25.00, image: organizerImage, description: 'Keep your workspace tidy.' },
      { id: 3, name: 'Monitor', price: 199.99, image: monitorImage, description: '27-inch HD monitor for productivity.' },
      { id: 4, name: 'Keyboard', price: 50.00, image: keyboardImage, description: 'Mechanical keyboard.' },
    ],
    school: [
      { id: 1, name: 'Notebook', price: 34.00, image: notebookImage, description: '80-page lined notebook.' },
      { id: 2, name: 'Pencil Case', price: 20.00, image: pencilCaseImage, description: 'Spacious pencil case with compartments.' },
      { id: 3, name: 'Backpack', price: 500.00, image: backpackImage, description: 'Durable backpack with multiple pockets.' },
      { id: 4, name: 'Highlighter Set', price: 50.00, image: highlighterImage, description: 'Highlighters in various colors.' },
    ],
  };

  // Ensure category exists before rendering its products
  const categoryProducts = products[category];

  const renderCategoryContent = () => {
    if (!categoryProducts) {
      return <p>No products available for this category.</p>;
    }

    return (
      <div>
        <p>Explore our exclusive range of {category} supplies!</p>
        <div className="product-list">
          {categoryProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="shop-category-container">
      {selectedBanner && ( // Only show the banner if it exists
        <img
          src={selectedBanner}
          alt={`${category} banner`}
          className="shop-category-banner"
        />
      )}
      <div className="shop-category-content">
        {renderCategoryContent()}
      </div>
    </div>
  );
};

export default ShopCategory;
