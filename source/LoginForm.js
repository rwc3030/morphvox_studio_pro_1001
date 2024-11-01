import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

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
            setError('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
            return;
        }
        if (!captcha) {
            setError('Please complete the CAPTCHA.');
            return;
        }
        // Proceed with login logic
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
            <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={(value) => setCaptcha(value)}
            />
            <button type="submit" disabled={loading || !username || !password}>
                Login
            </button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default LoginForm;
