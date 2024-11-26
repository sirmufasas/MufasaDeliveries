import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('You have successfully signed up for news!');
        setEmail('');
      } else if (response.status >= 500) {
        setMessage('Server error. Please try again later.');
      } else {
        const errorData = await response.json();
        setMessage(`Subscription failed: ${errorData.message}`);
      }
    } catch (error) {
      setMessage('Could not connect to the server. Please try again later.');
      console.error('Error during subscription:', error);
    }
  };

  return (
    <div className="newsletter">
      <hr />
      <h1>GET EXCLUSIVE OFFERS NOW</h1>
      <p>SUBSCRIBE AND STAY UPDATED</p>
      <div className="input-container">
        <input
          type="email"
          placeholder="Your Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default NewsLetter;
