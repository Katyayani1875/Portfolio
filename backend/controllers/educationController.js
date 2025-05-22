import { Education } from '../models/Education.js';

// Create education entry
export const createEducation = async (req, res) => {
  try {
    const { institution, degree, fieldOfStudy, startDate, endDate, grade, description } = req.body;
    if (!institution || !degree || !fieldOfStudy || !startDate) {
      return res.status(400).json({ message: 'Institution, degree, fieldOfStudy, and startDate are required' });
    }
    const education = new Education({
      institution,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
      grade,
      description,
    });
    await education.save();
    res.status(201).json({ message: 'Education entry created successfully', education });
  } catch (error) {
    console.error('Create Education Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all education entries
export const getEducation = async (req, res) => {
  try {
    const educationList = await Education.find().sort({ startDate: -1 });
    res.json(educationList);
  } catch (error) {
    console.error('Get Education Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
