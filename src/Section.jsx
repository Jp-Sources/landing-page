import React from 'react';
import './Section.css';
import Fade from 'react-reveal/Fade';

const Section = ({imageUrl, title, description}) => {
  return (
    <div className="section">
     <Fade left>
      <img className="section-image" src={imageUrl} alt={title} />
      <div className="section-content">
        <h3 className="section-title">{title}</h3>
        <p className="section-description">{description}</p>
      </div>
      </Fade>
    </div>
  );
};

export default Section;


