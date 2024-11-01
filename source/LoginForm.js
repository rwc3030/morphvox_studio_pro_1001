import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [loginAttempts, setLoginAttempts] = useState(0);
    const maxLoginAttempts = 3;

    const validatePasswordStrength = (password) => {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return strongPasswordRegex.test(password);
    };

    const handleLogin = async () => {
        if (loginAttempts >= maxLoginAttempts) {
            setError('Maximum login attempts exceeded. Please try again later.');
            return;
        }

        if (!username || !password) {
            setError('Username and password cannot be empty.');
            return;
        }

        if (!validatePasswordStrength(password)) {
            setError('Password must be at least 8 characters long and include uppercase, lowercase letters, and numbers.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Simulate a login request
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate a failed login
                    reject(new Error('Invalid credentials'));
                }, 2000);
            });
        } catch (err) {
            setLoginAttempts(prev => prev + 1);
            setError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
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
                {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default LoginForm;
