import { Experience } from '../models/Experience.js';

// Create experience entry
export const createExperience = async (req, res) => {
  try {
    const { company, position, location, startDate, endDate, responsibilities, achievements } = req.body;
    if (!company || !position || !startDate) {
      return res.status(400).json({ message: 'Company, position, and startDate are required' });
    }
    const experience = new Experience({
      company,
      position,
      location,
      startDate,
      endDate,
      responsibilities,
      achievements,
    });
    await experience.save();
    res.status(201).json({ message: 'Experience entry created successfully', experience });
  } catch (error) {
    console.error('Create Experience Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all experience entries
export const getExperience = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.json(experiences);
  } catch (error) {
    console.error('Get Experience Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
