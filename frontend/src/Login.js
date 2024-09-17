// src/Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send request to the backend to save the hashed password
            const response = await axios.post('/register', {
                email: email,
                password: password,
            });

            console.log(response.data);
            alert('User registered successfully!');
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                alert(`Failed to register user: ${error.response.data.message}`);
            } else if (error.request) {
                console.error('No response received:', error.request);
                alert('No response from the server. Please try again later.');
            } else {
                console.error('Error setting up request:', error.message);
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div style={{ margin: '50px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ margin: '10px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ marginLeft: '10px' }}
                    />
                </div>
                <div style={{ margin: '10px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ marginLeft: '10px' }}
                    />
                </div>
                <button type="submit" style={{ margin: '10px' }}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Login;
