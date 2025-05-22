// models/Education.js
import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },        // Name of the school/university
  degree: { type: String, required: true },             // Degree or certification earned
  fieldOfStudy: { type: String, required: true },       // Major or focus area
  startDate: { type: Date, required: true },            // Start date of the program
  endDate: { type: Date },                               // End date or expected graduation date
  grade: { type: String },                               // GPA or grade (optional)
  description: { type: String },                         // Additional info, honors, projects
  createdAt: { type: Date, default: Date.now },          // Timestamp of entry creation
});

export const Education = mongoose.model('Education', educationSchema);
