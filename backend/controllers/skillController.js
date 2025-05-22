import { Skill } from '../models/Skill.js';

// Create new skill
export const createSkill = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Debugging log
    const { name, category } = req.body;

    if (!name || category == null) {
      return res.status(400).json({ message: 'Name and category are required' });
    }

    const skill = new Skill({ name, category });
    await skill.save();
    res.status(201).json({ message: 'Skill created successfully', skill });
  } catch (error) {
    console.error('Create Skill Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Get all skills
export const getSkills = async (req, res) => {
  try {
    console.log('Fetching all skills...');
    const skills = await Skill.find();
    console.log('Skills retrieved:', skills);
    res.json(skills);
  } catch (error) {
    console.error('Get Skills Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
