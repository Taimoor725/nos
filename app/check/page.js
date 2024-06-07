import React from 'react';
import "./style.css"
const page = () => {
  return (
    <div className="social-icons w-screen h-screen">
      <div className="icon">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
        </a>
      </div>
      <div className="icon">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
      </div>
      <div className="icon">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="icon">
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
          <span>TikTok</span>
        </a>
      </div>
      <div className="icon">
        <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitch"></i>
          <span>Twitch</span>
        </a>
      </div>
      <div className="icon">
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
          <span>YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default page;