import React from 'react';
import { Link } from 'react-router-dom';
import './UpcomingProjectsSection.css';

import veedketImg from '../assets/veedket_1.png';
import offiketImg from '../assets/offiket_1.png';
import influwketImg from '../assets/influwket_1.png';
import inaiPostImg from '../assets/inai post.jpg';

const projectDetails = [
  {
    name: 'VEEDKET',
    img: veedketImg,
    title: 'Veedket',
    desc: 'AI-powered video editing and publishing platform.',
    author: 'INAI Worlds',
    link: '/veedket',
  },
  {
    name: 'OFFIKET',
    img: offiketImg,
    title: 'Offiket',
    desc: 'AI-based real estate solutions for smart transactions.',
    author: 'INAI Worlds',
    link: '/offiket',
  },
  {
    name: 'INFLUWKET',
    img: influwketImg,
    title: 'Influwket',
    desc: 'Influencer marketing and campaign analytics tool.',
    author: 'INAI Worlds',
    link: '/influwket',
  },
  {
    name: 'INAI LIFE',
    img: inaiPostImg,
    title: 'Inai Life',
    desc: 'AI-powered smart diagnostics and healthcare solutions.',
    author: 'INAI Worlds',
    link: '/inai_life',
  },
];

const UpcomingProjectsSection = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  
  // Create multiple duplicates for seamless infinite scroll
  const repeatedProjects = [
    ...projectDetails,
    ...projectDetails,
    ...projectDetails,
    ...projectDetails,
    ...projectDetails,
    ...projectDetails
  ];

  return (
    <section className="product-marquee-section">
      <h2 className="marquee-title">Upcoming Projects</h2>
      <div 
        className="product-marquee-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`product-marquee-track ${isPaused ? 'paused' : ''}`}
          style={{
            '--animation-play-state': isPaused ? 'paused' : 'running'
          }}
        >
          {repeatedProjects.map((proj, i) => (
            <div key={i} className="product-card">
              <img src={proj.img} alt={proj.name} className="product-image" />
              <div className="product-overlay">
                <div className="overlay-content">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-description">{proj.desc}</p>
                  <Link to={proj.link} className="read-more-btn">
                    Read More <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjectsSection;
