import express from 'express';
import { healthController } from '../controllers/index.js';
import authRoutes from './authRoutes.js';

const router = express.Router();

// health check
router.get('/health', healthController);

// User registration
router.use('/api/v1/auth', authRoutes);

export default router;
