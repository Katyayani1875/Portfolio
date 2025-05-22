import express from 'express';
import { createExperience, getExperience } from '../controllers/experienceController.js';

const router = express.Router();

router.post('/', createExperience); // Create a new experience entry
router.get('/', getExperience); // Get all experience entries

export default router;
