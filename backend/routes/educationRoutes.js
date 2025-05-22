import express from 'express';
import { createEducation, getEducation } from '../controllers/educationController.js';

const router = express.Router();

router.post('/', createEducation); // Create a new education entry
router.get('/', getEducation); // Get all education entries

export default router;