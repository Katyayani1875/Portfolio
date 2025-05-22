import mongoose from 'mongoose';
const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Skill = mongoose.model('Skill', skillSchema);


