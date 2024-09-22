import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './LoginSignup.css';

const LoginSignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(false); // To toggle between signup and login
    const navigate = useNavigate(); // For navigation

    // Handle form submission for Signup
    const handleContinue = () => {
        // Check if all fields are filled
        if (!name.trim() || !email.trim() || !password.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        // Check if user data already exists
        const existingUser = localStorage.getItem(email);
        if (existingUser) {
            alert('User already exists. Please log in.');
            setIsLoginMode(true); // Switch to login mode if user exists
        } else {
            // Store user data locally
            const userData = { name, email, password };
            localStorage.setItem(email, JSON.stringify(userData));
            alert('You have successfully signed up!');

            // Navigate to shop page after signup
            navigate('/shop');
        }
    };

    // Handle login
    const handleLogin = () => {
        // Check if both fields are filled
        if (!email.trim() || !password.trim()) {
            alert('Please fill in both email and password to log in.');
            return;
        }

        // Check if user exists in localStorage
        const storedUser = JSON.parse(localStorage.getItem(email));
        if (storedUser && storedUser.password === password) {
            alert(`Welcome back, ${storedUser.name}! You have successfully logged in.`);
            
            // Navigate to shop page after login
            navigate('/shop');
        } else {
            alert('Incorrect email or password.');
        }
    };

    // Switch between signup and login forms
    const toggleLoginMode = () => {
        setIsLoginMode(!isLoginMode);
        // Reset fields when switching modes
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{isLoginMode ? 'Login' : 'Sign Up'}</h1>
                <div className="loginsignup-fields">
                    {!isLoginMode && (
                        <input
                            type="text"
                            placeholder='Your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    )}
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {!isLoginMode ? (
                    <>
                        <button onClick={handleContinue}>Continue</button>
                        <p className='loginsignup-login'>
                            Already have an account? <span onClick={toggleLoginMode}>Login Here</span>
                        </p>
                    </>
                ) : (
                    <>
                        <button onClick={handleLogin}>Login</button>
                        <p className='loginsignup-login'>
                            New here? <span onClick={toggleLoginMode}>Sign Up Here</span>
                        </p>
                    </>
                )}
                {!isLoginMode && (
                    <div className="loginsignup-agree">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            By continuing, I agree to the terms of use & privacy policy.
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginSignup;
