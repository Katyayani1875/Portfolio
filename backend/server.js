// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './utils/db.js';
import { errorHandler } from './utils/errorHandler.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';

dotenv.config(); // Load environment variables

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // new added

app.use((req, res, next) => {
  if (req.method === 'GET') {
    return next();
  }
  express.json()(req, res, next);
});

// app.use(bodyParser.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Database Connection
connectDB().then(() => {
  // Start the Server
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
