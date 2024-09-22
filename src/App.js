import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Offers/Footer/Footer';
import office_banner from './Components/Assets/office_banner.png';
import school_banner from './Components/Assets/school_banner.png';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // If the item already exists in the cart, increase its quantity
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Otherwise, add the new item to the cart
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <BrowserRouter>
                <Navbar toggleDarkMode={toggleDarkMode} cartItems={cartItems} />
                <Routes>
                    <Route path='/' element={<Shop addToCart={addToCart} />} />
                    <Route path='/office' element={<Shopcategory banner={office_banner} category="office" addToCart={addToCart} />} />
                    <Route path='/school' element={<Shopcategory banner={school_banner} category="school" addToCart={addToCart} />} />
                    <Route path='/product/:productId' element={<Product addToCart={addToCart} />} />
                    <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                    <Route path='/login' element={<LoginSignup isDarkMode={isDarkMode} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
