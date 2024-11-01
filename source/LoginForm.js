import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [loginAttempts, setLoginAttempts] = useState(0);
    const MAX_LOGIN_ATTEMPTS = 3;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
            setError('Maximum login attempts exceeded. Please try again later.');
            return;
        }
        if (!username || !password) {
            setError('Username and password cannot be empty.');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('/api/login', { username, password });
            // Handle successful login (e.g., redirect or update state)
        } catch (err) {
            setLoginAttempts(prev => prev + 1);
            setError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div>{error}</div>}
            <button type="submit" disabled={loading || !username || !password}>Login</button>
        </form>
    );
};

export default LoginForm;
