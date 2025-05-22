import express from 'express';
import { createSkill, getSkills } from '../controllers/skillController.js';

const router = express.Router();

router.post('/', createSkill); // Create a new skill
router.get('/', getSkills); // Get all skills

export default router;