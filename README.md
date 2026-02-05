# 💕 Valantine - Ask Her to Be Your Valentine 💕

A beautiful, interactive web project to ask your girlfriend to be your Valentine with email notifications!

## 🌹 Features

- **Romantic Design**: Beautiful gradient background with animated floating hearts
- **Interactive Buttons**: "Yes" and "No" buttons with fun interactions
- **Email Notifications**: Get an email when she says yes!
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and celebratory effects when she says yes!
- **Personalized Message**: Customize the sweet message to make it extra special

## 🚀 Quick Setup (Without Email Notifications)

1. **Customize the message**: Edit the `message` text in `index.html`
2. **Open in browser**: Simply open `index.html` in your web browser
3. **Share with her**: Send her the link or open it on your device

## 📧 Setup With Email Notifications

### Prerequisites
- Node.js installed
- Gmail account

### Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up Gmail App Password**:
   - Enable 2-Step Verification on your Gmail account
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer" (or your device)
   - Copy the generated 16-character password

3. **Configure .env file**:
   - Open `.env` file in the root directory
   - Replace `your-gmail@gmail.com` with your Gmail address
   - Replace `your-app-password-here` with the 16-character password from step 2
   - Keep `NOTIFICATION_EMAIL=Wisdomeboma7@gmail.com` or change to your email

4. **Run the server**:
   ```bash
   npm start
   ```
   
5. **Open in browser**:
   - Visit `http://localhost:3000`

Now when she clicks "Yes", you'll receive an email notification! 🎉

## 📝 Files

- `index.html` - The main Valentine's page
- `styles.css` - Beautiful styling and animations
- `script.js` - Interactive elements and effects
- `server.js` - Backend server for email notifications
- `package.json` - Node.js dependencies
- `.env` - Configuration file (email settings)
- `README.md` - This file

## ✨ Customization Tips

- **Change the message**: Modify the text in the `<p class="message">` element in `index.html`
- **Change colors**: Update the gradient colors in `styles.css` (look for the gradient values)
- **Add more emoji**: Add your favorite emojis to the hearts array in `script.js`
- **Change notification email**: Edit the `NOTIFICATION_EMAIL` in `.env`

## 💖 When She Says Yes...

The page will celebrate with:
- Color change to a romantic pink gradient
- Falling hearts and confetti
- A sweet confirmation message
- You'll receive an email notification! 📧

## 🔐 Important Security Note

**Never commit your `.env` file to GitHub!** It contains sensitive credentials. The `.env` file should only exist locally on your machine. Add it to `.gitignore` to keep it safe.

Good luck! You've got this! 💕