import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const maxAttempts = 3;

    const handleLogin = async () => {
        if (attempts >= maxAttempts) {
            setError('Maximum login attempts exceeded. Please try again later.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('/api/login', { username, password });
            // Handle successful login (e.g., redirect or update state)
        } catch (err) {
            setAttempts(attempts + 1);
            setError('Invalid username or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                maxLength={20}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={20}
            />
            <button onClick={handleLogin} disabled={!username || !password || loading}>
                {loading ? 'Loading...' : 'Login'}
            </button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default LoginForm;
