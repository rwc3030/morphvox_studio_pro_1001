import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const maxAttempts = 3;

    const handleLogin = () => {
        if (attempts >= maxAttempts) {
            setError('Maximum login attempts exceeded. Please try again later.');
            return;
        }

        if (!username || !password) {
            setError('Username and password cannot be empty.');
            return;
        }

        if (!isPasswordStrong(password)) {
            setError('Password must be at least 8 characters long and include uppercase letters, numbers, and special characters.');
            return;
        }

        setLoading(true);
        // Simulate login process
        setTimeout(() => {
            // Assume login fails for demonstration
            setAttempts(attempts + 1);
            setError('Incorrect username or password.');
            setLoading(false);
        }, 2000);
    };

    const isPasswordStrong = (password) => {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPasswordRegex.test(password);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} disabled={loading || !username || !password}>
                {loading ? 'Loading...' : 'Login'}
            </button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default LoginForm;
