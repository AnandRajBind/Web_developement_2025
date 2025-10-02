 import { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import PhotoSlideshow from './components/PhotoSlideshow';  
import MusicPlayer from './components/MusicPlayer';
import CountdownTimer from './components/CountdownTimer';
import Guestbook from './components/Guestbook';
import ShareButtons from './components/ShareButtons';

function App() {
  useEffect(() => {
    // Set document title
    document.title = "🎉 Happy Birthday Pragyesh Kumar Seth! 🎂";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Celebrating Pragyesh Kumar Seth's Birthday on October 2nd! Join us for photos, music, wishes and more. आइए मिलकर मनाते हैं Pragyesh का जन्मदिन! 🎉";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div className="app">
      <MusicPlayer />
      <main>
        <Hero />
        <PhotoSlideshow />
        <CountdownTimer />
        <Guestbook />
        <ShareButtons />
      </main>
      <footer className="app-footer">
        <p>Made with ❤️ for Pragyesh's Special Day | October 2, 2025</p>
      </footer>
    </div>
  );
}

export default App;
