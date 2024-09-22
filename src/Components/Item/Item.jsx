import React from 'react';
import './Item.css'; // Ensure this path is correct

const item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt="productimg" />
            <p>{props.name}</p>
            <p>{props.description}</p>
            <div className="item-price">
                <div className="item-new-price">R{props.new_price}</div>
                <div className="item-price-old">R{props.old_price}</div>
            </div>
            <div className="item-rating">{`Rating: ${props.rating} ⭐`}</div>
        </div>
    );
}

export default item;
