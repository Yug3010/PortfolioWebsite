import React from 'react';
import './Experience.css';
import theme from '../../assets/theme_pattern.svg';
import experienceData from '../../assets/experienceData'; // Updated the import to reflect experience data

const Experience = () => {
  return (
    <div id='service' className='experience'>
      <div className="experience-title">
        <h1>My Experience</h1>
        <img src={theme} alt="" />
      </div>

      <div className="experience-container">
        {experienceData.map((data, index) => {
          return (
            <div key={index} className='experience-format'>
              <div className="experience-format-header">
                <h2>{data.s_name}</h2>
                <span>{data.date}</span>
              </div>
              <p>{data.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
