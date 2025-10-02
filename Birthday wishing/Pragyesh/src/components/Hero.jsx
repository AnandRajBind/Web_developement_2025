import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import confetti from 'canvas-confetti';
import { Calendar, Heart, Gift } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    // Initial confetti blast
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b9d', '#4fb3d9', '#6bcf7f', '#ffd93d']
    });

    // GSAP animations
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "bounce.out"
    })
    .from(dateRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(messageRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.3");

    // Floating animations
    gsap.to(".floating-heart", {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.7 },
      colors: ['#ff6b9d', '#4fb3d9', '#6bcf7f', '#ffd93d', '#ff9f43']
    });
  };

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-container">
        <div className="floating-hearts">
          <Heart className="floating-heart heart-1" size={24} />
          <Gift className="floating-heart heart-2" size={20} />
          <Calendar className="floating-heart heart-3" size={22} />
        </div>
        
        <h1 ref={titleRef} className="hero-title">
          Happy Birthday<br />
          <span className="name-highlight">Pragyesh!</span>
        </h1>
        
        <div ref={dateRef} className="birthday-date">
          <Calendar className="date-icon" size={32} />
          <span>October 2nd</span>
        </div>
        
        <p ref={messageRef} className="hero-message">
          आपका यह खास दिन खुशियों से भरा हो! 🎉<br />
          May this special day bring you endless joy and wonderful memories!
        </p>
        
        <button 
          className="celebration-btn"
          onClick={triggerConfetti}
        >
          🎊 Celebrate! 🎊
        </button>
      </div>
      
      <div className="hero-decoration">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
      </div>
    </section>
  );
};

export default Hero;