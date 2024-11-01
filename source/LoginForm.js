import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [captcha, setCaptcha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length > 20 || password.length > 20) {
            setError('Username and password must be 20 characters or less.');
            return;
        }
        if (!validatePasswordStrength(password)) {
            setError('Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.');
            return;
        }
        if (!captcha) {
            setError('Please complete the CAPTCHA.');
            return;
        }
        setLoading(true);
        // Perform login logic here
    };

    const validatePasswordStrength = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                maxLength="20"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                maxLength="20"
            />
            <div>
                {/* Implement CAPTCHA here */}
                <input
                    type="text"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    placeholder="Enter CAPTCHA"
                />
            </div>
            <button type="submit" disabled={loading || !username || !password}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default LoginForm;
