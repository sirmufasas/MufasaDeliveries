import React from 'react';
import './Checkout.css'; // Confirm the relative path
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Checkout = ({ cartItems, removeFromCart, updateQuantity }) => {
    const navigate = useNavigate(); // Initialize the navigate function
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Handle the click to proceed to the payment page
    const handleProceedToPayment = () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Please add items before proceeding to checkout.');
        } else {
            navigate('/payment'); // Navigate to the payment page
        }
    };

    // Navigate back to the shop if the cart is empty
    const handleBrowseProducts = () => {
        navigate('/'); // Navigate back to the shop page
    };

    return (
        <div className="cart-container">
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
                <div>
                    <p className="empty-cart-message">Your cart is empty.</p>
                    <button onClick={handleBrowseProducts} className="shop-more-btn">
                        Browse Products
                    </button>
                </div>
            ) : (
                <>
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p>Price: ${item.price}</p>
                                    <p>
                                        Quantity:
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))
                                            }
                                            min="1"
                                        />
                                    </p>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-summary">
                        <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
                        <button className="checkout-btn" onClick={handleProceedToPayment}>
                            Proceed to Payment
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout; // Ensure default export is included
