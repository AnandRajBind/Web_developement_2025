# 🎉 Happy Birthday Pragyesh Kumar Seth! 🎂

A beautiful, responsive birthday website celebrating Pragyesh Kumar Seth's special day (October 2nd). This website features animated confetti, photo slideshow, background music, countdown timer, guestbook, and social sharing.

## ✨ Features

- 🎊 **Hero Section**: Animated birthday message with confetti effects
- 📸 **Photo Slideshow**: Auto-playing slideshow with 6 photos
- 🎵 **Background Music**: Pleasant music with mute/unmute controls
- ⏰ **Countdown Timer**: Live countdown to next October 2nd
- 💌 **Guestbook**: Interactive comment system with local storage
- 📱 **Share Buttons**: WhatsApp, Facebook, Twitter, Email sharing
- 🎨 **Pastel Design**: Beautiful pastel colors with smooth animations
- 📱 **Mobile-First**: Fully responsive design

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Content

#### Photos (Required)
Add 6 photos to `/public/photos/` folder:
- `1.jpg` - Profile photo
- `2.jpg` - Childhood memory  
- `3.jpg` - School/college photo
- `4.jpg` - Friends photo
- `5.jpg` - Recent celebration
- `6.jpg` - Latest photo

#### Background Music (Optional)
Add music file to `/public/audio/birthday-music.mp3`

### 3. Start Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on every push

### Option 3: Manual Upload
1. Run `npm run build`
2. Upload `dist/` folder to Vercel

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-pink: #ff6b9d;
  --primary-blue: #4fb3d9;
  --primary-green: #6bcf7f;  
  --primary-yellow: #ffd93d;
}
```

### Content
- **Name**: Update in `Hero.jsx`
- **Birthday Date**: Update in `CountdownTimer.jsx` and `Hero.jsx`  
- **Messages**: Edit personalized messages in components
- **Contact Info**: Update phone/email in `ShareButtons.jsx`

### Photos
- **Size**: 600x400px recommended
- **Format**: JPG or PNG
- **Names**: Must be `1.jpg`, `2.jpg`, etc.

## 📱 Mobile Experience

- Touch-friendly navigation
- Responsive photo gallery
- Optimized for all screen sizes
- Fast loading with image optimization

## 🎵 Audio Setup

Add birthday music file as `/public/audio/birthday-music.mp3`:
- **Format**: MP3 (recommended)
- **Duration**: 2-5 minutes (loops automatically)
- **Size**: Under 10MB for best performance

## 🛠️ Technologies Used

- **React 19** - Modern UI framework
- **Vite** - Fast build tool
- **GSAP** - Professional animations
- **Lucide React** - Beautiful icons
- **Canvas Confetti** - Celebration effects

## 🎯 Performance Features

- Lazy image loading
- Optimized animations
- Mobile-first CSS
- Fast Vite bundling
- Efficient component structure

## 📞 Support

For setup help or customization:
1. Check browser console for errors
2. Ensure all image files are in correct locations
3. Test on different devices and browsers

---

**Made with ❤️ for Pragyesh's Birthday Celebration!** 🎊

*October 2nd - A Special Day for a Special Person* ⭐+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
