import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Users' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Got one user' });
});

// Mostly for admin dashboards
router.post('/', (req, res) => {
  res.json({ message: 'User created' }).status(201);
});

router.put('/:id', (req, res) => {
  res.json({ message: 'User updated' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'User deleted' });
});

export default router;
