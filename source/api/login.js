import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User'; // Assuming you have a User model

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send('Invalid username or password.');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid username or password.');
        }

        // Successful login logic (e.g., generate token, set session)
        res.status(200).send('Login successful');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

export default router;
