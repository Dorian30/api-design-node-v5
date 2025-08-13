import { Router } from 'express';

const router = Router();

// Defaults to 200
router.get('/', (req, res) => {
  res.json({ message: 'Habits' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Got one habit' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Habit created' }).status(201);
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Habit deleted' });
});

router.post('/:id/complete', (req, res) => {
  res.json({ message: 'Completed habit' }).status(201);
});

export default router;
