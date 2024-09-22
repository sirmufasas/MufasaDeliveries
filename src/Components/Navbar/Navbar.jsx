import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { BsBasket2Fill } from "react-icons/bs";
import logo from '../Assets/logo.png';

// Import your images
import image1 from '../Assets/buisesswoman cropped.png';
import image4 from '../Assets/schoolkids cropped.png';
import image2 from '../Assets/buisnessman cropped.png';
import image5 from '../Assets/trolly cropped.png';

const Navbar = ({ toggleDarkMode, cartItems }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : false;
    });

    const [currentImage, setCurrentImage] = useState(0);
    const location = useLocation(); // Get the current location

    const images = [
        image1,
        image2,
        image4,
        image5
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <>
            <div className={`navbar ${darkMode ? 'dark' : ''}`}>
                <div className="nav-logo">
                    <img src={logo} alt="Logo" style={darkMode ? { filter: 'invert(1)' } : { filter: 'none' }} />
                    <p>Mufasa Deliveries</p>
                </div>
                <ul className="nav-menu">
                    <li>
                        <Link to='/' className="nav-link">Shop</Link>
                    </li>
                    <li>
                        <Link to='/office' className="nav-link">Office</Link>
                    </li>
                    <li>
                        <Link to='/school' className="nav-link">School</Link>
                    </li>
                </ul>
                <div className="nav-login-cart">
                    <Link to='/login'><button className="btn">Login</button></Link>
                    <Link to='/cart' style={{ position: 'relative' }}>
                        <BsBasket2Fill />
                        <div className="nav-cart-count">{cartItems.length}</div>
                    </Link>
                    <button className="btn" onClick={toggleTheme}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>

            {/* Only show the carousel on the Shop page */}
            {location.pathname === '/' && (
                <div className="carousel-container">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Carousel ${index + 1}`}
                            className={`carousel-image ${currentImage === index ? 'active' : ''} ${(currentImage - 1 + images.length) % images.length === index ? 'prev' : ''}`}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;
