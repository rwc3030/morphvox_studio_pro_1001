import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());

const users = {
    // Example user for demonstration
    user1: 'password123',
};

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    if (users[username] && users[username] === password) {
        // Successful login logic (e.g., create session, return token)
        return res.status(200).json({ message: 'Login successful!' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }
});

export default router;
