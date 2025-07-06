const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tunez', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Import Contact model
const Contact = require('./models/Contact');

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Tunez API is running!' });
});

// POST /api/contact - Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }

    // Create new contact
    const newContact = new Contact({
      name,
      email,
      phone: phone || '',
      message
    });

    await newContact.save();

    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      contact: newContact
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// GET /api/contact - Fetch all messages
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 }) // Sort by newest first
      .select('-__v'); // Exclude version key

    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 