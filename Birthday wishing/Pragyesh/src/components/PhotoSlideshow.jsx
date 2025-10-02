import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { gsap } from 'gsap';

const PhotoSlideshow = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slideRef = useRef(null);
  const intervalRef = useRef(null);

  // Sample photos - user will replace these
  const photos = [
    {
      src: '/photos/1.jpg',
      alt: 'Pragyesh - Childhood memories',
      caption: 'Little Pragyesh with that infectious smile! 😊'
    },
    {
      src: '/photos/2.jpg', 
      alt: 'Pragyesh - School days',
      caption: 'School days - making memories and friends! 📚'
    },
    {
      src: '/photos/3.jpg',
      alt: 'Pragyesh - College life',
      caption: 'College adventures and new beginnings! 🎓'
    },
    {
      src: '/photos/4.jpg',
      alt: 'Pragyesh - With friends',
      caption: 'Amazing times with the best people! 👫'
    },
    {
      src: '/photos/5.jpg',
      alt: 'Pragyesh - Recent celebration',
      caption: 'Recent celebrations and happy moments! 🎉'
    },
    {
      src: '/photos/6.jpg',
      alt: 'Pragyesh - Latest photo',
      caption: 'The amazing person you are today! ⭐'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, photos.length]);

  useEffect(() => {
    // Animate slide transition
    gsap.fromTo(slideRef.current, 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [currentPhoto]);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="slideshow-section">
      <div className="slideshow-container">
        <h2 className="section-title">📸 Memory Lane</h2>
        
        <div className="slideshow-wrapper">
          <button className="slide-btn prev-btn" onClick={prevPhoto}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="slide-container">
            <div ref={slideRef} className="slide">
              <img 
                src={photos[currentPhoto].src} 
                alt={photos[currentPhoto].alt}
                className="slide-image"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.target.src = `https://via.placeholder.com/600x400/ff6b9d/white?text=Photo+${currentPhoto + 1}`;
                }}
              />
              <div className="slide-caption">
                <p>{photos[currentPhoto].caption}</p>
              </div>
            </div>
          </div>
          
          <button className="slide-btn next-btn" onClick={nextPhoto}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="slideshow-controls">
          <button className="control-btn" onClick={toggleAutoplay}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          
          <div className="photo-indicators">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentPhoto ? 'active' : ''}`}
                onClick={() => setCurrentPhoto(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSlideshow;