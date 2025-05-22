import express from 'express';
import { createContact, getAllContacts } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', createContact); // Create a new contact message
router.get('/', getAllContacts); // Get all contact messages (optional for admin)

export default router;