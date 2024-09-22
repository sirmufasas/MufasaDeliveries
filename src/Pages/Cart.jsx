import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch cart items from local storage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    // Add an item to the cart
    const addToCart = (product) => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        
        if (!isLoggedIn) {
            alert('Please log in or sign up to add items to your cart.');
            navigate('/login'); // Redirect to login/signup if not logged in
            return;
        }

        const existingItem = cartItems.find(item => item.id === product.id);
        let updatedCart;

        if (existingItem) {
            // Increase quantity if the item already exists
            updatedCart = cartItems.map(item => 
                item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            );
        } else {
            // Add new item to the cart
            updatedCart = [...cartItems, { ...product, quantity: 1 }];
        }

        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
        alert(`${product.name} has been added to your cart.`);
    };

    // Remove an item from the cart
    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
    };

    // Update the quantity of a cart item
    const updateQuantity = (id, amount) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + amount } : item
        ).filter(item => item.quantity > 0); // Remove item if quantity drops to 0

        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
    };

    // Calculate the total price of items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Proceed to checkout
    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Add some items first.');
            return;
        }

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
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
                                <button onClick={() => addToCart(item)} className="add-btn">Add One More</button> {/* Add item to cart */}
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h3>Total: ${calculateTotal()}</h3>
                        <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
