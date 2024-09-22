import React from 'react';
import './Hero.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import hand_icon from '../Assets/hand icon.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        {/* <h2>
          <span>N</span><span>E</span><span>W</span>  ARRIVALS  ONLY
        </h2> */}
        <div className="hero-hand-icon">
          <p>
            <span>N</span><span>E</span><span>W</span>
          </p>
          <img src={hand_icon} alt="Hand Icon" className="hand-icon" />
        </div>
        <p>
          <span>C</span><span>O</span><span>L</span><span>L</span><span>E</span><span>C</span><span>T</span><span>I</span><span>O</span><span>N</span><span>S</span>
        </p>
        <p>
          <span>F</span><span>O</span><span>R</span> <span>E</span><span>V</span><span>E</span><span>R</span><span>Y</span><span>O</span><span>N</span><span>E</span>
        </p>
      </div>

      <div className="hero-latest-btn">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>L</span><span>A</span><span>T</span><span>E</span><span>S</span><span>T</span> COLLECTION
          <FaArrowAltCircleLeft className="hero-arrow-icon" style={{ marginLeft: '10px' }} />
        </div>
      </div>

      <div className="hero-right">
      </div>
    </div>
  );
};

export default Hero;
