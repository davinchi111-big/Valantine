require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Route to handle "Yes" click
app.post('/send-notification', async (req, res) => {
  try {
    const userEmail = process.env.NOTIFICATION_EMAIL;
    const { visitorName, timestamp } = req.body;
    
    console.log('📧 Email request received from:', visitorName);
    console.log('📧 Sending to:', userEmail);
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: `💕 ${visitorName} Said YES! 💕`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; color: white; text-align: center;">
          <h1 style="font-size: 2.5rem; margin: 20px 0;">🎉 CONGRATULATIONS! 🎉</h1>
          <p style="font-size: 1.5rem; margin: 20px 0;"><strong>${visitorName}</strong> clicked YES!</p>
          <p style="font-size: 1rem; margin: 20px 0;">Your Valentine's Day proposal was successful! 💕</p>
          <p style="font-size: 2rem; margin: 30px 0;">❤️💖💝</p>
          <p style="font-size: 0.9rem; color: #f0f0f0;">Responded at: ${new Date(timestamp).toLocaleString()}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to:', userEmail);
    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
  }
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`❤️ Valantine server running on http://localhost:${PORT}`);
});
