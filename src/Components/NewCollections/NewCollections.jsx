import React, { useEffect, useState, useCallback } from 'react';
import './NewCollections.css';
import notebookImage from '../Assets/notebook.png';
import keyboardImage from '../Assets/keyboard.png';
import backpackImage from '../Assets/backpack.png';
import chairImage from '../Assets/chair.png';

const NewCollections = () => {
  const [visible, setVisible] = useState(false);

  // Memoize handleScroll using useCallback to avoid redefinition on every render
  const handleScroll = useCallback(() => {
    const element = document.querySelector('.collections');
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      window.removeEventListener('scroll', handleScroll); // Remove event listener after visible
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // No warning as handleScroll is now stable

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={`collections ${visible ? 'visible' : ''}`}>
        <div className="frame">
          <img src={notebookImage} alt="New Collection 1" />
        </div>
        <div className="frame">
          <img src={keyboardImage} alt="New Collection 2" />
        </div>
        <div className="frame">
          <img src={backpackImage} alt="New Collection 3" />
        </div>
        <div className="frame">
          <img src={chairImage} alt="New Collection 4" />
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
