import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [captcha, setCaptcha] = useState('');
    const [loginAttempts, setLoginAttempts] = useState(0);
    const MAX_LOGIN_ATTEMPTS = 3;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
            setError('Maximum login attempts exceeded. Please try again later.');
            return;
        }
        if (username.length > 20 || password.length > 20) {
            setError('Username and password must be 20 characters or less.');
            return;
        }
        if (!validatePasswordStrength(password)) {
            setError('Password does not meet strength requirements.');
            return;
        }
        // Simulate CAPTCHA verification
        if (!captcha) {
            setError('Please complete the CAPTCHA.');
            return;
        }
        // Simulate login process
        setLoading(true);
        // Assume login logic here
        // On failure:
        setLoginAttempts(prev => prev + 1);
        setError('Incorrect username or password.');
        setLoading(false);
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
                maxLength={20}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={20}
                placeholder="Password"
            />
            <input
                type="text"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                placeholder="Enter CAPTCHA"
            />
            <button type="submit" disabled={loading}>Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default LoginForm;
