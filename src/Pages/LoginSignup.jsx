import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(false);
    const navigate = useNavigate();

    const handleContinue = async () => {
        if (!name.trim() || !email.trim() || !password.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://3.87.254.2:8000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                alert('You have successfully signed up!');
                navigate('/shop');
            } else {
                const errorData = await response.json();
                alert(`Signup failed: ${errorData.message}`);
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
            console.error('Error during signup:', error);
        }
    };

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            alert('Please fill in both email and password to log in.');
            return;
        }

        try {
            const response = await fetch('http://3.87.254.2:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const userData = await response.json();
                alert(`Welcome back, ${userData.user.email}! You have successfully logged in.`);
                navigate('/shop');
            } else {
                const errorData = await response.json();
                alert(`Login failed: ${errorData.message}`);
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
            console.error('Error during login:', error);
        }
    };

    const toggleLoginMode = () => {
        setIsLoginMode(!isLoginMode);
        setName(''); // Clear name field on toggle
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
