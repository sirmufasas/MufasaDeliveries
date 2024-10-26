import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Cart.css';
import { ShopContext } from '../../Context/ShopContext';

const Cart = () => {
    const { getTotalCartAmount, products_data, cartItems, removeFromCart } = useContext(ShopContext);
    const navigate = useNavigate();
    const [storedCart, setStoredCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setStoredCart(savedCart);
    }, []);

    // Navigate back to products page
    const handleBackToShopping = () => {
        navigate('/products');
    };

    // Update the total cart amount from context
    const calculateTotal = () => getTotalCartAmount().toFixed(2);

    return (
        <div className='cart-container'>
            <h2>Your Cart</h2>
            {storedCart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className='cart-items-header'>
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {products_data.map((product) => {
                        if (cartItems[product.id] > 0) {
                            return (
                                <div key={product.id} className='cart-item'>
                                    <img src={product.image} alt={product.name} className='cart-item-image' />
                                    <div className='item-details'>
                                        <h3>{product.name}</h3>
                                        <p>R{product.new_price.toFixed(2)}</p>
                                        <p>{cartItems[product.id]}</p>
                                        <p>R{(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                                        <img
                                            className='remove-icon'
                                            src='/path/to/remove-icon.png'
                                            onClick={() => removeFromCart(product.id)}
                                            alt='Remove'
                                        />
                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className='cart-summary'>
                        <h3>Cart Totals</h3>
                        <div className='cart-totals'>
                            <div className='cart-item-total'>
                                <p>Subtotal</p>
                                <p>R{calculateTotal()}</p>
                            </div>
                            <hr />
                            <div className='cart-item-total'>
                                <p>Delivery Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className='cart-item-total'>
                                <h3>Total</h3>
                                <h3>R{calculateTotal()}</h3>
                            </div>
                        </div>
                        <Link to='/'><button className='checkout-btn'>Proceed To Check-Out</button></Link>
                    </div>
                    <div className='cart-promo'>
                        <p>If you have confirmed payment, click submit</p>
                        <Link to='/'><button className='promo-btn'>Submit</button></Link>
                    </div>
                    <button onClick={handleBackToShopping} className='back-btn'>Back to Shopping</button>
                </>
            )}
        </div>
    );
};

export default Cart;
