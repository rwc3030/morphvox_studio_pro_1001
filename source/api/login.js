import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User'; // Assuming you have a User model

const router = express.Router();
const MAX_LOGIN_ATTEMPTS = 3;
let loginAttempts = {};

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    if (!loginAttempts[username]) {
        loginAttempts[username] = 0;
    }

    if (loginAttempts[username] >= MAX_LOGIN_ATTEMPTS) {
        return res.status(429).json({ message: 'Maximum login attempts exceeded. Please try again later.' });
    }

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            loginAttempts[username]++;
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Reset attempts on successful login
        loginAttempts[username] = 0;

        // Handle successful login (e.g., create a session or return a token)
        res.status(200).json({ message: 'Login successful.' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error.' });
    }
});

export default router;
