import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

// Import images
import monitorImage from '../Assets/monitor.png';
import pencilCaseImage from '../Assets/pencilcase.png';
import organizerImage from '../Assets/organizer.png';
import highlighterImage from '../Assets/highlighter.png';

const Popular = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.popular-item');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(true);
          window.removeEventListener('scroll', handleScroll); // Remove event listener after visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN OFFICE</h1>
      <hr />
      <div className={`popular-item ${visible ? 'visible' : ''}`}>
        <Item 
          name="Monitor" 
          image={monitorImage} 
          new_price={199.99} 
          old_price={null} 
          rating={4} 
          description="27-inch HD monitor for productivity." 
        />
        <Item 
          name="Pencil Case" 
          image={pencilCaseImage} 
          new_price={20.00} 
          old_price={null} 
          rating={4} 
          description="Spacious pencil case with compartments." 
        />
        <Item 
          name="Desk Organizer" 
          image={organizerImage} 
          new_price={25.00} 
          old_price={null} 
          rating={3} 
          description="Keep your workspace tidy." 
        />
        <Item 
          name="Highlighter Set" 
          image={highlighterImage} 
          new_price={50.00} 
          old_price={null} 
          rating={4} 
          description="Highlighters in various colors." 
        />
      </div>
    </div>
  );
};

export default Popular;
