import React, { useState, useEffect } from 'react';
import './School.css';
import notebookImage from '../Assets/notebook.png';
import pencilCaseImage from '../Assets/pencilcase.png';
import backpackImage from '../Assets/backpack.png';
import highlighterImage from '../Assets/highlighter.png';

const School = () => {
    const [schoolItems, setSchoolItems] = useState([]);

    useEffect(() => {
        setSchoolItems([
            { id: 1, name: 'Notebook', price: 34.00, image: notebookImage, description: '80-page lined notebook.' },
            { id: 2, name: 'Pencil Case', price: 20.00, image: pencilCaseImage, description: 'Spacious pencil case with compartments.' },
            { id: 3, name: 'Backpack', price: 500.00, image: backpackImage, description: 'Durable backpack with multiple pockets.' },
            { id: 4, name: 'Highlighter Set', price: 50.00, image: highlighterImage, description: 'Highlighters in various colors.' },
        ]);
    }, []);


    setSchoolItems([
        { id: 1, name: 'Notebook', price: 34.00, image: require('../Assets/notebook.png'), description: '80-page lined notebook.' },
        { id: 2, name: 'Pencil Case', price: 20.00, image: require('../Assets/pencilcase.png'), description: 'Spacious pencil case with compartments.' },
        { id: 3, name: 'Backpack', price: 500.00, image: require('../Assets/backpack.png'), description: 'Durable backpack with multiple pockets.' },
        { id: 4, name: 'Highlighter Set', price: 50.00, image: require('../Assets/highlighter.png'), description: 'Highlighters in various colors.' },
    ]);
    


    return (
        <div className="school-page">
            <h1>School Supplies</h1>
            <div className="item-grid">
                {schoolItems.map(item => (
                    <div key={item.id} className="item-card">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>${item.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default School;
