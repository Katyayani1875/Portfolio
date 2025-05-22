import express from 'express';
import { createProject, getProjects } from '../controllers/projectController.js';

const router = express.Router();

router.post('/', createProject); // Create a new project
router.get('/', getProjects); // Get all projects

export default router;