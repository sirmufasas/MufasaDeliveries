import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
    const navigate = useNavigate(); // Initialize the navigate function
    
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        // Navigate to the checkout page
        navigate('/checkout');
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h4>{item.name}</h4>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <div>
                                        <button
                                            className="remove-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)} // Use updateQuantity here
                                            disabled={item.quantity === 1}
                                        >
                                            -
                                        </button>
                                        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                                        <button
                                            className="remove-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)} // Use updateQuantity here
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p>Total: ${total.toFixed(2)}</p>
                        <button onClick={handleCheckout} className="checkout-btn">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
