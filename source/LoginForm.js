import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok) {
            // Handle successful login (e.g., redirect or update UI)
        } else {
            setError(data.message || 'Login failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit" disabled={!username || !password || loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default LoginForm;
