import React from 'react';
import './Footer.css';
import { TfiInstagram } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../Assets/logo.png'; // Adjusted path
import { SiWhatsapp } from "react-icons/si";



const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt="logo" />
                <p>Mufasa Deliveries</p>
            </div>

            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>

            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <span><TfiInstagram size={40} /></span>
                </div>
                <div className="footer-icons-container">
                    <span><FaFacebookSquare size={40} /></span>
                </div>
                <div className="footer-icons-container">
                    <span><FaXTwitter size={40} /></span>
                </div>
                <div className="footer-icons-container">
                    <span><SiWhatsapp size={40} /></span>
                </div>
            </div>

            <div className="footer-copy-right">
                <hr />
                <p>Copyright @2024 - All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
