import React from 'react';
import './Offers.css';
import exclusive from '../Assets/exclusive.png';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Offers = () => {
  return (
    <div className='offers'>
      <hr />
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS FOR YOU</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        {/* Wrap the button with Link to navigate to /Office */}
        <Link to="/Office">
          <button>Check Now</button>
        </Link>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="exclusive" />
      </div>
    </div>
  );
};

export default Offers;
