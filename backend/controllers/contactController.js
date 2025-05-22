import { Contact } from '../models/Contact.js';
import nodemailer from 'nodemailer';

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save the contact message to DB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Setup Nodemailer transporter (example with Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,      // Your Gmail address
        pass: process.env.EMAIL_PASS,      // Your Gmail App Password or email password
      },
    });

    // Email content options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,          // Your email to receive contact messages
      subject: `New Contact Message from ${name}`,
      text: `You have received a new message from your portfolio contact form:\n\n` +
            `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    // Send email notification
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        // Note: We do not fail the API here because contact is saved, just log error
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    // Send success response
    res.status(201).json({ message: 'Message received successfully', contact });

  } catch (error) {
    console.error('Create Contact Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Optional: Get all contact messages (for admin)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Get Contacts Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
