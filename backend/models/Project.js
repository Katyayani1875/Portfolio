import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  liveLink: { type: String },
  githubLink: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Project = mongoose.model('Project', projectSchema);