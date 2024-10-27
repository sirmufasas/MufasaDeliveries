import React from 'react';
import office_banner from '../Components/Assets/office_banner.png'; 
import school_banner from '../Components/Assets/school_banner.png'; 

const ShopCategory = ({ category, addToCart }) => {
  const banners = {
    office: office_banner,
    school: school_banner,
  };

  // Get the selected banner or fallback to a default image
  const selectedBanner = banners[category] || '../Components/Assets/default_banner.png';

  // Sample product data
  const products = {
    office: [
      { id: 1, name: 'Premium Notepad', price: 12.99, image: 'link_to_notepad_image' },
      { id: 2, name: 'Stylish Pen Set', price: 19.99, image: 'link_to_pen_image' },
      { id: 3, name: 'Desk Organizer', price: 29.99, image: 'link_to_organizer_image' },
    ],
    school: [
      { id: 4, name: 'Math Workbook', price: 8.99, image: 'link_to_workbook_image' },
      { id: 5, name: 'Colored Pencils', price: 15.99, image: 'link_to_colored_pencils_image' },
      { id: 6, name: 'Backpack', price: 49.99, image: 'link_to_backpack_image' },
    ],
  };

  // Render category-specific content
  const renderCategoryContent = () => {
    switch (category) {
      case 'office':
        return (
          <div>
            <p>Explore our exclusive range of office supplies!</p>
            <div className="product-list">
              {products.office.map(product => (
                <div key={product.id} className="product-item">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'school':
        return (
          <div>
            <p>Check out our selection of school essentials!</p>
            <div className="product-list">
              {products.school.map(product => (
                <div key={product.id} className="product-item">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <p>Welcome! Browse our categories.</p>;
    }
  };

  return (
    <div className="shop-category-container">
      <img 
        src={selectedBanner} 
        alt={`${category} banner`} 
        className="shop-category-banner" 
      />
      <div className="shop-category-content">
        {renderCategoryContent()}
      </div>
    </div>
  );
};

export default ShopCategory;
