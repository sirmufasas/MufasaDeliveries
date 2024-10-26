// ShopCategory.js
import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import office_banner from '../Components/Assets/office_banner.png';
import school_banner from '../Components/Assets/school_banner.png';

const ShopCategory = ({ category }) => {
    const { addToCart, products_data, getTotalCartAmount } = useContext(ShopContext);

    const banners = {
        office: office_banner,
        school: school_banner,
    };

    const selectedBanner = banners[category] || '../Components/Assets/default_banner.png';

    const renderCategoryContent = () => {
        const categoryProducts = products_data[category] || [];

        return (
            <div>
                <p>{category === 'office' ? 'Explore our exclusive range of office supplies!' : 'Check out our selection of school essentials!'}</p>
                <div className="product-list">
                    {categoryProducts.map(product => (
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
                <div className="cart-total">
                    <h3>Total Cart Amount: ${getTotalCartAmount()}</h3>
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;
