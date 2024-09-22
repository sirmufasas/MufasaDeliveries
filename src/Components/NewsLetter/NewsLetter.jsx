import React from 'react';
import './NewsLetter.css'; 

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <hr />
      <h1>GET EXCLUSIVE OFFERS NOW</h1>
      <p>SUBSCRIBE AND STAY UPDATED</p>
      <div className='input-container'>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
