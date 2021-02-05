import React from 'react';

import './Announcement.css'

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="announcement-layer"></div>
      <div className="announcement-content">
        <h3>Spring/Summer 2021</h3>
        <h1>Little New Arrivals</h1>
        <h4>Spring, we've been waiting for you! Discover the sweetest styles in miniature form for your new arrivals, babies and toddlers up to 2 years old.</h4>
      </div>
      <div className='announcement-button'>
        <button>Shop Now</button>
      </div>


    </div>
  );
}

export default Announcement;