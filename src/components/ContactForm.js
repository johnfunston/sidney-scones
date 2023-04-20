import React, { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactForm = () => {
  const [selectedChip, setSelectedChip] = useState('Leave a Review');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="contact-form">
      <div className="left-side">
        <div className="social-icons">
          {/* Replace these with actual social media icons */}
          <div className="icon-box"><TwitterIcon/></div>
          <div className="icon-box"><FacebookIcon/></div>
          <div className="icon-box"><InstagramIcon/></div>
        </div>
        <h1 className="contact-h1">We'd love to hear from you!</h1>
        <h3 className="contact-h3">sidneyscones@example.com<br></br>tel: (250) 580-6166</h3>
        
      </div>
      <div className="right-side">
        <div className="chips">
          <button
            className={`chip ${selectedChip === 'Leave a Review' ? 'selected' : ''}`}
            onClick={() => setSelectedChip('Leave a Review')}
          >
            Leave a Review
          </button>
          <button
            className={`chip ${selectedChip === 'Store Location' ? 'selected' : ''}`}
            onClick={() => setSelectedChip('Store Location')}
          >
            Store Location
          </button>
          <button
            className={`chip ${selectedChip === 'Suggestion & Questions' ? 'selected' : ''}`}
            onClick={() => setSelectedChip('Suggestion & Questions')}
          >
            Suggestion & Questions
          </button>
        </div>
        <div className="rating-chips">
          {/* Add more rating chips as needed */}
          <button className="chip">Customer Service</button>
          <button className="chip">Quality</button>
          <button className="chip">Atmosphere</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;