import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());

const mockUser = {
    username: 'testuser',
    password: 'password123',
};

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === mockUser.username && password === mockUser.password) {
        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

export default router;
