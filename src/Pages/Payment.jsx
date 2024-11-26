import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Payment.css';

const Payment = ({ cartItems = [], totalAmount = 0 }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
    const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission
    const navigate = useNavigate(); // Hook for navigation

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable button on submit

        // Validation
        const cardNumberRegex = /^[0-9]{16}$/; // 16 digits
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
        const cvvRegex = /^[0-9]{3,4}$/; // 3-4 digits

        let isValid = true;
        let errors = { cardNumber: '', expiryDate: '', cvv: '' };

        if (!cardNumber) {
            errors.cardNumber = 'Card number is required.';
            isValid = false;
        } else if (!cardNumberRegex.test(cardNumber)) {
            errors.cardNumber = 'Invalid card number. Must be 16 digits.';
            isValid = false;
        }

        if (!expiryDate) {
            errors.expiryDate = 'Expiry date is required.';
            isValid = false;
        } else if (!expiryDateRegex.test(expiryDate)) {
            errors.expiryDate = 'Invalid expiry date. Use MM/YY format.';
            isValid = false;
        }

        if (!cvv) {
            errors.cvv = 'CVV is required.';
            isValid = false;
        } else if (!cvvRegex.test(cvv)) {
            errors.cvv = 'Invalid CVV. Must be 3-4 digits.';
            isValid = false;
        }

        setError(errors); // Set error state

        if (!isValid) {
            setIsSubmitting(false); // Enable button if there is an error
            return; // Exit the function if validation fails
        }

        // If validation passes
        alert('Thank you for shopping with us! Your package is on the way.');
        navigate('/'); // Redirect to home page
    };

    // Format total amount safely
    const formattedTotal = !isNaN(totalAmount) ? totalAmount.toFixed(2) : '0.00';

    return (
        <div className="payment-container">
            <h2>Payment</h2>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <ul>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                            </li>
                        ))
                    ) : (
                        <li>No items in the cart</li> // Fallback if cartItems is empty
                    )}
                </ul>
                <p>
                    <strong>Total: ${formattedTotal}</strong>
                </p>
            </div>

            <form onSubmit={handlePaymentSubmit} className="payment-form">
                <div>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength="16"
                    />
                    {error.cardNumber && <p className="error-message">{error.cardNumber}</p>}
                </div>
                <div>
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YY"
                        maxLength="5"
                    />
                    {error.expiryDate && <p className="error-message">{error.expiryDate}</p>}
                </div>
                <div>
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                        maxLength="4"
                    />
                    {error.cvv && <p className="error-message">{error.cvv}</p>}
                </div>

                <button type="submit" className="pay-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
        </div>
    );
};

export default Payment;
