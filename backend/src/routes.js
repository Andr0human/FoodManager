import express from 'express';
import healthController from './controllers/healthController.js';

const router = express.Router();

// health check
router.get('/health', healthController);

export default router;
