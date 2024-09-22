import React from 'react';
import './Offers.css';
import exclusive from '../Assets/exclusive.png';

const Offers = () => {
  return (
    <div className='offers'>
      <hr />
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS FOR YOU</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="exclusive" />
      </div>
    </div>
  );
};

export default Offers;
