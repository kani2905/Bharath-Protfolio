import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory / file backup store for contact inquiries
const messagesFilePath = path.join(__dirname, 'messages.json');
const getMessages = () => {
  try {
    if (!fs.existsSync(messagesFilePath)) {
      fs.writeFileSync(messagesFilePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(messagesFilePath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading messages file:', err);
    return [];
  }
};

const saveMessage = (msg) => {
  try {
    const list = getMessages();
    list.push(msg);
    fs.writeFileSync(messagesFilePath, JSON.stringify(list, null, 2));
  } catch (err) {
    console.error('Error saving message file:', err);
  }
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'Bharath R Portfolio API',
    version: '1.0.0'
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide name, email, and message.'
    });
  }

  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid email address.'
    });
  }

  const newMessage = {
    id: 'msg_' + Date.now(),
    name: name.trim(),
    email: email.trim(),
    subject: (subject || 'General Inquiry').trim(),
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  saveMessage(newMessage);

  console.log(`[Contact Form] New message received from ${newMessage.name} (${newMessage.email}):`);
  console.log(`Subject: ${newMessage.subject}`);
  console.log(`Message: ${newMessage.message}`);

  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out! Your message has been received.',
    data: {
      id: newMessage.id,
      timestamp: newMessage.createdAt
    }
  });
});

// Serve frontend build if in production
const clientDistPath = path.join(__dirname, '../client/dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 Portfolio API running on port ${PORT}`);
  console.log(`👉 http://localhost:${PORT}/api/health`);
  console.log(`=========================================`);
});

