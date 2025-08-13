import { Router } from 'express';

const router = Router();

router.post('/register', (req, res) => {
  // Handle registration
  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  // Handle login
  res.status(201).json({ message: 'User logged in successfully' });
});

export default router;
