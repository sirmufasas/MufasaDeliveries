import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item'; // Adjust based on your actual structure

const Popular = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.popular-item');
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true);
        window.removeEventListener('scroll', handleScroll); // Remove event listener after visible
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // No need for dependencies here since handleScroll is defined inside the effect

  return (
    <div className='popular'>
      <h1>POPULAR IN OFFICE</h1>
      <hr />
      <div className={`popular-item ${visible ? 'visible' : ''}`}>
        <Item 
          name="Business Woman Supplies" 
          description="Essential supplies for office productivity." 
          new_price={299.99} 
          old_price={349.99} 
          rating={4} 
        />
        <Item 
          name="Business Man Essentials" 
          description="Office tools for the modern businessman." 
          new_price={399.99} 
          old_price={449.99} 
          rating={5} 
        />
        <Item 
          name="School Kids Kit" 
          description="Perfect school supplies kit for kids." 
          new_price={199.99} 
          old_price={249.99} 
          rating={4} 
        />
        <Item 
          name="Trolley Bag" 
          description="Durable and spacious trolley bag for office or travel." 
          new_price={499.99} 
          old_price={599.99} 
          rating={5} 
        />
      </div>
    </div>
  );
};

export default Popular;
