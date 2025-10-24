import express from 'express';
import { UserController } from '../controllers/userController.js';
import { validateUserData } from '../middleware/validation.js';

const router = express.Router();

// Create or update user
router.post('/', validateUserData, UserController.createOrUpdateUser);

// Get user by email
router.get('/:email', UserController.getUserByEmail);

// Get user statistics
router.get('/:email/stats', UserController.getUserStats);

export default router;
