import { Project } from '../models/Project.js';

// Create new project
export const createProject = async (req, res) => {
  try {
    const { title, description, technologies, liveLink, githubLink } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }
    const project = new Project({ title, description, technologies, liveLink, githubLink });
    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    console.error('Create Project Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Get Projects Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
