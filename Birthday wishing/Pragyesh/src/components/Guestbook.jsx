import { useState, useEffect } from 'react';
import { Send, Heart, MessageCircle, User } from 'lucide-react';
import confetti from 'canvas-confetti';

const Guestbook = () => {
  const [wishes, setWishes] = useState([]);
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load wishes from localStorage
    const savedWishes = localStorage.getItem('birthday-wishes');
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes));
    } else {
      // Add some sample wishes
      const sampleWishes = [
        {
          id: 1,
          name: 'Family',
          message: 'Happy Birthday beta! May all your dreams come true! 🎂❤️',
          timestamp: new Date().toISOString(),
          likes: 5
        },
        {
          id: 2,
          name: 'Best Friend',
          message: 'Yaar, tera birthday finally aa gaya! Party hard! 🎉🎊',
          timestamp: new Date().toISOString(),
          likes: 3
        }
      ];
      setWishes(sampleWishes);
      localStorage.setItem('birthday-wishes', JSON.stringify(sampleWishes));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newWish.name.trim() || !newWish.message.trim()) return;

    setIsSubmitting(true);

    const wish = {
      id: Date.now(),
      name: newWish.name.trim(),
      message: newWish.message.trim(),
      timestamp: new Date().toISOString(),
      likes: 0
    };

    const updatedWishes = [wish, ...wishes];
    setWishes(updatedWishes);
    localStorage.setItem('birthday-wishes', JSON.stringify(updatedWishes));

    // Trigger confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ff6b9d', '#4fb3d9', '#6bcf7f', '#ffd93d']
    });

    setNewWish({ name: '', message: '' });
    setIsSubmitting(false);
  };

  const likeWish = (id) => {
    const updatedWishes = wishes.map(wish =>
      wish.id === id ? { ...wish, likes: wish.likes + 1 } : wish
    );
    setWishes(updatedWishes);
    localStorage.setItem('birthday-wishes', JSON.stringify(updatedWishes));
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className="guestbook-section">
      <div className="guestbook-container">
        <h2 className="section-title">💌 Birthday Wishes</h2>
        <p className="section-subtitle">Leave a special message for Pragyesh!</p>

        <form className="wish-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-with-icon">
              <User className="input-icon" size={20} />
              <input
                type="text"
                placeholder="Your name"
                value={newWish.name}
                onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                maxLength={50}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <div className="input-with-icon">
              <MessageCircle className="input-icon" size={20} />
              <textarea
                placeholder="Write your birthday wish... (Hindi/English dono chalega! 😊)"
                value={newWish.message}
                onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                maxLength={300}
                rows={4}
                required
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            <Send size={18} />
            <span>{isSubmitting ? 'Sending...' : 'Send Wish'}</span>
          </button>
        </form>

        <div className="wishes-list">
          <h3 className="wishes-title">🎉 All Wishes ({wishes.length})</h3>
          
          {wishes.length === 0 ? (
            <div className="no-wishes">
              <MessageCircle size={48} />
              <p>Be the first to wish Pragyesh!</p>
            </div>
          ) : (
            <div className="wishes-grid">
              {wishes.map((wish) => (
                <div key={wish.id} className="wish-card">
                  <div className="wish-header">
                    <span className="wish-author">{wish.name}</span>
                    <span className="wish-date">{formatDate(wish.timestamp)}</span>
                  </div>
                  <p className="wish-message">{wish.message}</p>
                  <div className="wish-footer">
                    <button 
                      className="like-btn"
                      onClick={() => likeWish(wish.id)}
                    >
                      <Heart size={16} />
                      <span>{wish.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;