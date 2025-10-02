import { useState, useEffect } from 'react';
import { Calendar, Clock, Gift, Sparkles } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let nextBirthday = new Date(currentYear, 9, 2); // October 2nd (month is 0-indexed)
      
      // If birthday has passed this year, calculate for next year
      if (now > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, 9, 2);
      }
      
      const difference = nextBirthday - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setIsToday(false);
      } else {
        // It's the birthday today!
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsToday(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days', icon: <Calendar size={24} />, color: '#ff6b9d' },
    { value: timeLeft.hours, label: 'Hours', icon: <Clock size={24} />, color: '#4fb3d9' },
    { value: timeLeft.minutes, label: 'Minutes', icon: <Gift size={24} />, color: '#6bcf7f' },
    { value: timeLeft.seconds, label: 'Seconds', icon: <Sparkles size={24} />, color: '#ffd93d' }
  ];

  if (isToday) {
    return (
      <section className="countdown-section today">
        <div className="countdown-container">
          <h2 className="section-title">🎉 IT'S BIRTHDAY TIME! 🎉</h2>
          <div className="birthday-celebration">
            <div className="celebration-message">
              <h3>आज Pragyesh का जन्मदिन है! 🎂</h3>
              <p>Today is the special day we've all been waiting for!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <h2 className="section-title">⏰ Birthday Countdown</h2>
        <p className="countdown-subtitle">Time left until Pragyesh's special day!</p>
        
        <div className="countdown-grid">
          {timeUnits.map((unit, index) => (
            <div key={index} className="countdown-card" style={{ borderTopColor: unit.color }}>
              <div className="countdown-icon" style={{ color: unit.color }}>
                {unit.icon}
              </div>
              <div className="countdown-number">{unit.value.toString().padStart(2, '0')}</div>
              <div className="countdown-label">{unit.label}</div>
            </div>
          ))}
        </div>
        
        <div className="next-birthday-info">
          <p>🗓️ Next Birthday: <strong>October 2nd</strong></p>
          <p className="birthday-fact">Fun Fact: October 2nd is World Smile Day in some years! 😊</p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
