import { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Mail, Heart } from 'lucide-react';

const ShareButtons = () => {
  const [copied, setCopied] = useState(false);

  const shareText = "🎉 Come celebrate Pragyesh Kumar Seth's Birthday! 🎂 Join the celebration and leave your wishes! 🎈";
  const siteUrl = window.location.href;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + siteUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`,
    email: `mailto:?subject=${encodeURIComponent('Birthday Celebration for Pragyesh!')}&body=${encodeURIComponent(shareText + '\n\n' + siteUrl)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <section className="share-section">
      <div className="share-container">
        <h2 className="section-title">📢 Share the Joy!</h2>
        <p className="section-subtitle">Help spread birthday wishes for Pragyesh!</p>

        <div className="share-buttons">
          <button 
            className="share-btn whatsapp"
            onClick={() => handleShare('whatsapp')}
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </button>

          <button 
            className="share-btn facebook"
            onClick={() => handleShare('facebook')}
          >
            <Heart size={20} />
            <span>Facebook</span>
          </button>

          <button 
            className="share-btn twitter"
            onClick={() => handleShare('twitter')}
          >
            <Share2 size={20} />
            <span>Twitter</span>
          </button>

          <button 
            className="share-btn email"
            onClick={() => handleShare('email')}
          >
            <Mail size={20} />
            <span>Email</span>
          </button>
        </div>

        <div className="copy-link">
          <div className="copy-input-group">
            <input 
              type="text" 
              value={siteUrl} 
              readOnly 
              className="link-input"
            />
            <button 
              className={`copy-btn ${copied ? 'copied' : ''}`}
              onClick={copyToClipboard}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        <div className="contact-info">
          <h3>💝 Contact Pragyesh</h3>
          <p>Want to send personal wishes? Reach out directly!</p>
          <div className="contact-buttons">
            <a href="tel:+91XXXXXXXXXX" className="contact-btn">
              📞 Call
            </a>
            <a href="mailto:pragyesh@example.com" className="contact-btn">
              ✉️ Email
            </a>
          </div>
          <p className="contact-note">
            <small>Update contact details in ShareButtons.jsx</small>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShareButtons;