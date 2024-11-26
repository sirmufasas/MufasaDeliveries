import React, { useState, useCallback, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Offers/Footer/Footer';
import officeBanner from './Components/Assets/office_banner.png';
import schoolBanner from './Components/Assets/school_banner.png';
import Payment from './Pages/Payment';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

    // Add product to cart
    const addToCart = useCallback((product) => {
        setCartItems((prevItems) =>
            prevItems.find((item) => item.id === product.id)
                ? prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
                : [...prevItems, { ...product, quantity: 1 }]
        );
    }, []);

    // Remove product from cart
    const removeFromCart = useCallback((productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    }, []);

    // Update quantity of a cart item
    const updateQuantity = useCallback((id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
            )
        );
    }, []);

    // Calculate the total amount
    const calculateTotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    }, [cartItems]);

    // Handle checkout completion
    const handleCheckoutComplete = useCallback(() => {
        setCartItems([]); // Reset cart items
        navigate('/'); // Redirect to the homepage
    }, [navigate]);

    // Handle payment completion
    const handlePaymentComplete = useCallback(() => {
        setCartItems([]); // Reset cart items
        navigate('/'); // Redirect to the homepage
    }, [navigate]);

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <Navbar toggleDarkMode={toggleDarkMode} cartItems={cartItems} />
            <Routes>
                <Route path="/" element={<Shop addToCart={addToCart} />} />
                <Route
                    path="/office"
                    element={<ShopCategory banner={officeBanner} category="office" addToCart={addToCart} />}
                />
                <Route
                    path="/school"
                    element={<ShopCategory banner={schoolBanner} category="school" addToCart={addToCart} />}
                />
                <Route
                    path="/product/:productId"
                    element={<Product addToCart={addToCart} />}
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                        />
                    }
                />
                <Route
                    path="/checkout"
                    element={
                        <Checkout
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                            onCheckoutComplete={handleCheckoutComplete} // Reset cart after checkout
                        />
                    }
                />
                <Route
                    path="/payment"
                    element={
                        <Payment
                            cartItems={cartItems}
                            totalAmount={calculateTotal}
                            onPaymentComplete={handlePaymentComplete} // Reset cart after payment
                        />
                    }
                />
                <Route
                    path="/login"
                    element={<LoginSignup isDarkMode={isDarkMode} />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
