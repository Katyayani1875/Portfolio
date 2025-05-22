// models/Experience.js
import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },            // Company or organization name
  position: { type: String, required: true },           // Job title or role
  location: { type: String },                            // City, country (optional)
  startDate: { type: Date, required: true },            // Employment start date
  endDate: { type: Date },                               // End date (or null if currently employed)
  responsibilities: [{ type: String }],                 // List of main duties or achievements
  achievements: [{ type: String }],                      // Optional: Key achievements, quantified if possible
  createdAt: { type: Date, default: Date.now },          // Timestamp of entry creation
});

export const Experience = mongoose.model('Experience', experienceSchema);
