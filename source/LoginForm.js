import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const MAX_ATTEMPTS = 3;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in both fields.');
            return;
        }
        if (attempts >= MAX_ATTEMPTS) {
            setError('Too many login attempts. Please try again later.');
            return;
        }
        setLoading(true);
        // Simulate login process
        setTimeout(() => {
            // Simulate incorrect credentials
            const isValid = false; // Replace with actual validation logic
            if (!isValid) {
                setAttempts(attempts + 1);
                setError('Invalid credentials. Please try again.');
            } else {
                // Handle successful login
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit" disabled={loading || !username || !password}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default LoginForm;
